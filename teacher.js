const RESULT_STORAGE_KEY = "msShirleySpmResultsV1";
const ASSIGNMENT_STORAGE_KEY = "msShirleyAssignmentsV1";
const REWARD_STORAGE_KEY = "msShirleyRewardClaimsV1";
const TEACHER_PASSWORD_KEY = "msShirleyTeacherPasswordV1";
const TEACHER_SESSION_KEY = "msShirleyTeacherSessionV1";
let allResults = [];
let assignments = [];

function safe(value) {
  return String(value ?? "").replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

function readRows(key, fallback = []) {
  try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); } catch (error) { return fallback; }
}

async function hashPassword(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map(byte => byte.toString(16).padStart(2, "0")).join("");
}

function showTeacherApp() {
  document.querySelector("#teacherLogin").hidden = true;
  document.querySelector("#teacherApp").hidden = false;
  loadData();
  populateQuestionOptions();
  renderAll();
}

async function handleTeacherLogin() {
  const password = document.querySelector("#teacherPassword").value;
  const status = document.querySelector("#loginStatus");
  if (password.length < 4) {
    status.textContent = "密码至少需要 4 个字符。";
    return;
  }
  const savedHash = localStorage.getItem(TEACHER_PASSWORD_KEY);
  const enteredHash = await hashPassword(password);
  if (!savedHash) {
    localStorage.setItem(TEACHER_PASSWORD_KEY, enteredHash);
  } else if (savedHash !== enteredHash) {
    status.textContent = "密码不正确，请再试一次。";
    return;
  }
  sessionStorage.setItem(TEACHER_SESSION_KEY, "yes");
  showTeacherApp();
}

function loadData() {
  allResults = readRows(RESULT_STORAGE_KEY);
  assignments = readRows(ASSIGNMENT_STORAGE_KEY);
}

function filteredResults() {
  const query = document.querySelector("#resultSearch").value.trim().toLowerCase();
  return allResults.filter(row => {
    const haystack = [row.studentName, row.question, row.prompt].join(" ").toLowerCase();
    return !query || haystack.includes(query);
  });
}

function displayScore(row) {
  return Number.isFinite(row.teacherScore) ? row.teacherScore : row.total;
}

function renderResults() {
  const rows = filteredResults();
  const students = new Set(allResults.map(row => (row.studentName || "").trim().toLowerCase()).filter(Boolean));
  const scores = allResults.map(displayScore);
  const average = scores.length ? (scores.reduce((sum, score) => sum + score, 0) / scores.length).toFixed(1) : "—";
  document.querySelector("#submissionCount").textContent = allResults.length;
  document.querySelector("#studentCount").textContent = students.size;
  document.querySelector("#averageScore").textContent = average === "—" ? average : `${average}/25`;
  document.querySelector("#highestScore").textContent = scores.length ? `${Math.max(...scores)}/25` : "—";
  document.querySelector("#resultRows").innerHTML = rows.length ? rows.map(row => `
    <tr><td><strong>${safe(row.studentName)}</strong>${row.teacherComment ? '<br><small class="commented">♥ 已评语</small>' : ""}</td><td>${safe(row.question)}</td><td><strong>${displayScore(row)}/25</strong>${Number.isFinite(row.teacherScore) ? "<br><small>老师评分</small>" : ""}</td><td>${safe(row.level)}</td><td>${row.criteria?.Fluency ?? "—"}/5</td><td>${new Date(row.submittedAt).toLocaleString()}</td><td><button data-id="${safe(row.id)}">查看</button></td></tr>
  `).join("") : '<tr><td class="empty-results" colspan="7">还没有学生提交。请先在 SPM Corner 完成一次练习。</td></tr>';
}

function populateQuestionOptions() {
  const select = document.querySelector("#assignmentQuestion");
  select.innerHTML = "";
  const questionCards = [...document.querySelectorAll("#questionData option")];
  if (questionCards.length) return;
  const questionNames = ["Sleeping habit", "A meaningful holiday", "Studies after SPM", "Favourite family activity", "Your biggest fear", "Environment", "An expensive item", "My favourite exercise", "Crime rate", "Favourite colour", "A shop you like", "Eco-friendly practices", "Mental health", "E-wallet", "Vaping", "Stress management", "A healthy lifestyle", "Food delivery apps", "A movie", "Learning something new", "Digital literacy", "Plan after SPM", "Your neighbours", "Multiple skills"];
  select.innerHTML = questionNames.map((name, index) => `<option value="${index}">${safe(name)}</option>`).join("");
}

function publishAssignment() {
  const title = document.querySelector("#assignmentTitle").value.trim();
  const questionSelect = document.querySelector("#assignmentQuestion");
  if (!title) {
    document.querySelector("#assignmentTitle").focus();
    return;
  }
  assignments.unshift({
    id: crypto.randomUUID?.() || `assignment-${Date.now()}`,
    title,
    questionIndex: Number(questionSelect.value),
    questionName: questionSelect.options[questionSelect.selectedIndex].text,
    dueDate: document.querySelector("#assignmentDue").value,
    note: document.querySelector("#assignmentNote").value.trim(),
    active: true,
    createdAt: new Date().toISOString()
  });
  localStorage.setItem(ASSIGNMENT_STORAGE_KEY, JSON.stringify(assignments));
  document.querySelector("#assignmentTitle").value = "";
  document.querySelector("#assignmentNote").value = "";
  renderAssignments();
}

function renderAssignments() {
  const container = document.querySelector("#assignmentAdminList");
  container.innerHTML = assignments.length ? assignments.map(item => {
    const completions = allResults.filter(row => row.assignmentId === item.id).length;
    return `<article><div><span class="tag">${item.active === false ? "已关闭" : "进行中"}</span><strong>${safe(item.title)}</strong><small>${safe(item.questionName)} · ${item.dueDate || "无截止日期"} · ${completions} 次提交</small></div><button class="secondary-btn" data-toggle-assignment="${safe(item.id)}">${item.active === false ? "重新开放" : "关闭练习"}</button></article>`;
  }).join("") : '<p class="empty-results">还没有发布练习。</p>';
}

function toggleAssignment(id) {
  const item = assignments.find(row => row.id === id);
  if (!item) return;
  item.active = item.active === false;
  localStorage.setItem(ASSIGNMENT_STORAGE_KEY, JSON.stringify(assignments));
  renderAssignments();
}

function rewardSummary() {
  const counts = {};
  allResults.forEach(row => {
    const key = (row.studentName || "").trim().toLowerCase();
    if (!key) return;
    counts[key] ||= { name: row.studentName, count: 0 };
    counts[key].count += 1;
  });
  return Object.entries(counts).map(([key, value]) => ({ key, ...value }));
}

function renderRewards() {
  const container = document.querySelector("#rewardAdminList");
  const claims = readRows(REWARD_STORAGE_KEY, {});
  const rows = rewardSummary();
  container.innerHTML = rows.length ? rows.map(row => {
    const earned = Math.floor(row.count / 10);
    const given = claims[row.key] || 0;
    const available = Math.max(0, earned - given);
    return `<article><div><strong>${safe(row.name)}</strong><small>${row.count} 个训练 · 已兑换 ${given} 个</small></div><span class="gift-badge">🎁 ${available} 个可换</span><button class="primary-btn" data-redeem="${safe(row.key)}" ${available < 1 ? "disabled" : ""}>标记已送礼物</button></article>`;
  }).join("") : '<p class="empty-results">学生完成训练后，礼物进度会显示在这里。</p>';
}

function redeemGift(key) {
  const claims = readRows(REWARD_STORAGE_KEY, {});
  claims[key] = (claims[key] || 0) + 1;
  localStorage.setItem(REWARD_STORAGE_KEY, JSON.stringify(claims));
  renderRewards();
}

function getAudio(id) {
  return new Promise(resolve => {
    if (!("indexedDB" in window)) return resolve(null);
    const request = indexedDB.open("MsShirleySpeaking", 1);
    request.onupgradeneeded = () => request.result.createObjectStore("recordings");
    request.onerror = () => resolve(null);
    request.onsuccess = () => {
      const query = request.result.transaction("recordings").objectStore("recordings").get(id);
      query.onsuccess = () => { request.result.close(); resolve(query.result || null); };
      query.onerror = () => { request.result.close(); resolve(null); };
    };
  });
}

function studentHistory(name) {
  return allResults.filter(row => row.studentName === name).sort((a, b) => new Date(a.submittedAt) - new Date(b.submittedAt)).slice(-8);
}

async function showDetail(id) {
  const row = allResults.find(item => item.id === id);
  if (!row) return;
  const criteria = Object.entries(row.criteria || {}).map(([key, value]) => `<div><span>${safe(key)}</span><strong>${value}/5</strong></div>`).join("");
  const history = studentHistory(row.studentName);
  const maxScore = 25;
  const progress = history.map(item => `<div class="progress-point"><span style="height:${displayScore(item) / maxScore * 100}%"></span><small>${displayScore(item)}</small></div>`).join("");
  document.querySelector("#detailContent").innerHTML = `<p class="eyebrow">${safe(row.part)}</p><h2>${safe(row.studentName)}</h2><p>${safe(row.question)}</p><div class="detail-grid"><div><span>System score</span><strong>${row.total}/25</strong></div><div><span>CEFR</span><strong>${safe(row.level)}</strong></div><div><span>Duration</span><strong>${row.duration}s</strong></div>${criteria}</div><h3>最近进步</h3><div class="progress-chart">${progress}</div><h3>Transcript</h3><p class="detail-transcript">${safe(row.transcript)}</p><div id="detailAudio"></div><div class="teacher-feedback-form"><label>老师最终评分（0–25）<input class="teacher-filter" id="teacherFinalScore" type="number" min="0" max="25" value="${Number.isFinite(row.teacherScore) ? row.teacherScore : row.total}"></label><label>给学生的评语<textarea class="teacher-filter" id="teacherComment" rows="4" placeholder="例如：你今天的例子很清楚！下次尝试少看稿，老师相信你可以。">${safe(row.teacherComment)}</textarea></label><button class="primary-btn" id="saveTeacherFeedback" data-result-id="${safe(row.id)}">保存评分与评语</button><p class="save-status" id="teacherSaveStatus"></p></div>`;
  const blob = await getAudio(id);
  if (blob) {
    const audio = document.createElement("audio");
    audio.controls = true;
    audio.src = URL.createObjectURL(blob);
    audio.style.width = "100%";
    document.querySelector("#detailAudio").append(audio);
  } else if (row.hasRecording) document.querySelector("#detailAudio").textContent = "这段录音不在目前的装置上。";
  document.querySelector("#resultDetail").showModal();
}

function saveTeacherFeedback(id) {
  const row = allResults.find(item => item.id === id);
  if (!row) return;
  const score = Number(document.querySelector("#teacherFinalScore").value);
  row.teacherScore = Math.max(0, Math.min(25, score));
  row.teacherComment = document.querySelector("#teacherComment").value.trim();
  row.reviewedAt = new Date().toISOString();
  localStorage.setItem(RESULT_STORAGE_KEY, JSON.stringify(allResults));
  document.querySelector("#teacherSaveStatus").textContent = "已保存。谢谢你用评语鼓励学生 💛";
  renderResults();
}

function exportCsv() {
  const rows = filteredResults();
  const fields = ["studentName", "question", "total", "teacherScore", "level", "teacherComment", "submittedAt", "transcript"];
  const csv = [fields.join(","), ...rows.map(row => fields.map(field => `"${String(row[field] ?? "").replaceAll('"', '""')}"`).join(","))].join("\n");
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob(["\ufeff", csv], { type: "text/csv;charset=utf-8" }));
  link.download = `spm-speaking-results-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function renderAll() {
  renderResults();
  renderAssignments();
  renderRewards();
}

document.querySelector("#teacherLoginButton").addEventListener("click", handleTeacherLogin);
document.querySelector("#teacherPassword").addEventListener("keydown", event => { if (event.key === "Enter") handleTeacherLogin(); });
document.querySelector("#resultSearch").addEventListener("input", renderResults);
document.querySelector("#exportResults").addEventListener("click", exportCsv);
document.querySelector("#publishAssignment").addEventListener("click", publishAssignment);
document.querySelector("#assignmentAdminList").addEventListener("click", event => { const button = event.target.closest("button[data-toggle-assignment]"); if (button) toggleAssignment(button.dataset.toggleAssignment); });
document.querySelector("#rewardAdminList").addEventListener("click", event => { const button = event.target.closest("button[data-redeem]"); if (button) redeemGift(button.dataset.redeem); });
document.querySelector("#resultRows").addEventListener("click", event => { const button = event.target.closest("button[data-id]"); if (button) showDetail(button.dataset.id); });
document.querySelector("#detailContent").addEventListener("click", event => { const button = event.target.closest("#saveTeacherFeedback"); if (button) saveTeacherFeedback(button.dataset.resultId); });
document.querySelector("#closeDetail").addEventListener("click", () => document.querySelector("#resultDetail").close());
window.addEventListener("storage", event => {
  if ([RESULT_STORAGE_KEY, ASSIGNMENT_STORAGE_KEY, REWARD_STORAGE_KEY].includes(event.key) && !document.querySelector("#teacherApp").hidden) {
    loadData();
    renderAll();
  }
});

if (localStorage.getItem(TEACHER_PASSWORD_KEY)) {
  document.querySelector("#loginTitle").textContent = "老师登录";
  document.querySelector("#loginHelp").textContent = "请输入老师密码查看学生资料。";
}
if (sessionStorage.getItem(TEACHER_SESSION_KEY) === "yes") showTeacherApp();
