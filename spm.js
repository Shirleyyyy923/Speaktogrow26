const spmQuestions = [
  {
    source: "SPM Trial 2024",
    set: "Trial",
    part: "Part 2A",
    title: "Sleeping habit",
    prompt: "Talk about your sleeping habit.",
    bullets: ["when you usually go to sleep", "what you normally do before going to sleep", "how to improve your sleeping habit", "why having a good sleeping habit is important for health"]
  },
  {
    source: "SPM Trial 2024",
    set: "Trial",
    part: "Part 2B",
    title: "A meaningful holiday",
    prompt: "Talk about a meaningful holiday you recently had.",
    bullets: ["where the holiday was", "what you did during the holiday", "who was involved", "why the holiday was meaningful"]
  },
  {
    source: "SPM Trial 2024",
    set: "Trial",
    part: "Part 3 HOTS",
    title: "Studies after SPM",
    prompt: "Should teenagers further their studies after SPM?",
    bullets: ["give your opinion", "explain one reason", "give one example", "end with a clear conclusion"]
  },
  {
    source: "SPM Trial 2024",
    set: "Trial",
    part: "Part 2A",
    title: "Favourite family activity",
    prompt: "Talk about your favourite activity you like to do with your family.",
    bullets: ["what the activity is", "when you normally do the activity", "if you enjoy this activity with your family", "why spending time with family is important"]
  },
  {
    source: "SPM Trial 2024",
    set: "Trial",
    part: "Part 2B",
    title: "Your biggest fear",
    prompt: "Talk about your biggest fear.",
    bullets: ["what you consider to be your biggest fear", "why you feel that way", "what you can do to overcome your fear", "if it is important for people to face their fears"]
  },
  {
    source: "SPM Trial 2024",
    set: "Trial",
    part: "Part 3 HOTS",
    title: "Environment",
    prompt: "Why is protecting the environment important for the future generation?",
    bullets: ["state two reasons", "give one real-life example", "suggest one action teenagers can take"]
  },
  {
    source: "SPM Trial 2024",
    set: "Trial",
    part: "Part 2A",
    title: "An expensive item",
    prompt: "Talk about an expensive item you have ever bought.",
    bullets: ["what the item is", "where you bought it", "how you benefit from the item", "whether spending money on expensive items is a good choice"]
  },
  {
    source: "SPM Trial 2024",
    set: "Trial",
    part: "Part 2B",
    title: "My favourite exercise",
    prompt: "Talk about your favourite exercise.",
    bullets: ["what it is", "when and how often you do it", "reasons for choosing this exercise", "the benefits of doing this exercise"]
  },
  {
    source: "SPM Trial 2024",
    set: "Trial",
    part: "Part 3 HOTS",
    title: "Crime rate",
    prompt: "In what ways does a high rate of crimes affect the country?",
    bullets: ["economy", "safety", "tourism", "community confidence"]
  },
  {
    source: "SPM Trial 2024",
    set: "Trial",
    part: "Part 2A",
    title: "Favourite colour",
    prompt: "Talk about your favourite colour.",
    bullets: ["what colour it is", "what items you have in that colour", "why you like it", "if colours affect your mood"]
  },
  {
    source: "SPM Trial 2024",
    set: "Trial",
    part: "Part 2B",
    title: "A shop you like",
    prompt: "Talk about a shop you like to go to.",
    bullets: ["what shop it is", "what you usually buy there", "how often you go there", "if you would join its membership programme"]
  },
  {
    source: "SPM Trial 2024",
    set: "Trial",
    part: "Part 3 HOTS",
    title: "Eco-friendly practices",
    prompt: "In what ways does adopting eco-friendly practices help in saving the environment?",
    bullets: ["reduce waste", "save energy", "protect nature", "build better habits"]
  },
  {
    source: "SPM Trial 2024",
    set: "Trial",
    part: "Part 2A",
    title: "Mental health",
    prompt: "Talk about mental health problems among teenagers.",
    bullets: ["a common mental health problem", "how it affects teenagers", "ways to overcome it", "why mental health is important"]
  },
  {
    source: "SPM Trial 2024",
    set: "Trial",
    part: "Part 2B",
    title: "E-wallet",
    prompt: "Talk about e-wallet.",
    bullets: ["what an e-wallet is", "one benefit", "one risk", "if schools should allow cashless payments at the canteen"]
  },
  {
    source: "SPM Trial 2024",
    set: "Trial",
    part: "Part 3 HOTS",
    title: "Vaping",
    prompt: "Should vaping among those under 18 years old be banned?",
    bullets: ["state your stand", "explain health effects", "mention school or family roles", "give a conclusion"]
  },
  {
    source: "SPM Trial 2024",
    set: "Trial",
    part: "Part 2A",
    title: "Stress management",
    prompt: "Talk about handling stress.",
    bullets: ["what makes you stressed", "how you reduce stress", "why stress management is important", "how to help a friend deal with stress"]
  },
  {
    source: "SPM Trial 2024",
    set: "Trial",
    part: "Part 2B",
    title: "A healthy lifestyle",
    prompt: "Talk about how to maintain a healthy lifestyle.",
    bullets: ["what you do to be healthy", "how often you practise it", "why you choose it", "how to encourage more people to be healthy"]
  },
  {
    source: "SPM Trial 2024",
    set: "Trial",
    part: "Part 3 HOTS",
    title: "Food delivery apps",
    prompt: "How far do you agree that relying on food delivery apps has many disadvantages?",
    bullets: ["cost", "health", "convenience", "personal discipline"]
  },
  {
    source: "SPM Trial 2024",
    set: "Trial",
    part: "Part 2A",
    title: "A movie",
    prompt: "Talk about a movie you watched recently.",
    bullets: ["the title of the movie", "who you watched it with", "how you felt", "if movies broaden one's perspective"]
  },
  {
    source: "SPM Trial 2024",
    set: "Trial",
    part: "Part 2B",
    title: "Learning something new",
    prompt: "Talk about a new thing you have learned recently.",
    bullets: ["what you learned", "how you learned it", "why it is useful", "if teenagers should learn new things"]
  },
  {
    source: "SPM Trial 2024",
    set: "Trial",
    part: "Part 3 HOTS",
    title: "Digital literacy",
    prompt: "To what extent is digital literacy becoming a fundamental skill across all job sectors?",
    bullets: ["workplace needs", "communication", "online safety", "future careers"]
  },
  {
    source: "SPM Trial 2024",
    set: "Trial",
    part: "Part 2A",
    title: "Plan after SPM",
    prompt: "Talk about your plan after SPM.",
    bullets: ["what you want to do", "why you choose it", "who supports you", "how you will prepare"]
  },
  {
    source: "SPM Trial 2024",
    set: "Trial",
    part: "Part 2B",
    title: "Your neighbours",
    prompt: "Talk about your neighbours.",
    bullets: ["who they are", "how often you meet them", "how they help you", "why good neighbours are important"]
  },
  {
    source: "SPM Trial 2024",
    set: "Trial",
    part: "Part 3 HOTS",
    title: "Multiple skills",
    prompt: "How does learning multiple skills help you?",
    bullets: ["confidence", "future jobs", "problem solving", "independence"]
  },
  {
    source: "Real SPM",
    set: "Real",
    part: "Coming Soon",
    title: "Real SPM questions",
    prompt: "Upload or paste your real SPM questions here, and Ms Shirley's site will turn them into practice cards.",
    bullets: ["source or year", "part and topic", "question prompt", "bullet points or answer guide"]
  }
];

const sampleAnswers = {
  "Sleeping habit": "I would like to talk about my sleeping habit. I usually go to bed at about eleven o'clock after preparing my schoolbag. I can improve this habit by putting my phone away earlier. A good sleeping habit is important because it helps me stay healthy and focus better in class.",
  "A meaningful holiday": "I would like to talk about a meaningful holiday in Penang with my family. We visited historical places, tried local food and took many photos together. The holiday was meaningful because we spent quality time together. It also taught me to appreciate Malaysia's culture.",
  "Studies after SPM": "In my opinion, teenagers should further their studies after SPM. One reason is that they can gain useful knowledge and skills for their future careers. For example, a student who is interested in technology can study computer science. Therefore, further education can give teenagers more opportunities in life.",
  "Favourite family activity": "My favourite family activity is having dinner together. We usually do this at weekends when everyone is free. I enjoy it because we can share stories and laugh together. Spending time with family is important because it makes our relationship stronger.",
  "Your biggest fear": "My biggest fear is speaking in front of a large crowd. I feel nervous because I worry about making mistakes. To overcome it, I practise in front of my friends and prepare simple notes. I believe facing our fears is important because it helps us become more confident.",
  "Environment": "Protecting the environment is important for the future generation. Firstly, clean air and water are necessary for good health. For example, reducing plastic waste can keep rivers and oceans clean. Teenagers can help by using reusable bottles and separating rubbish for recycling.",
  "An expensive item": "I would like to talk about my laptop, which I bought at a shopping centre. It was expensive, but I use it for homework, research and online learning. It saves time and helps me complete schoolwork more effectively. I think an expensive item is a good choice when it is useful and can last for a long time.",
  "My favourite exercise": "My favourite exercise is badminton. I play it twice a week with my friends at a nearby court. I choose badminton because it is fun and does not require a large team. It improves my fitness, reduces stress and teaches me teamwork.",
  "Crime rate": "A high crime rate can affect a country in several ways. People may feel unsafe, while tourists may avoid visiting the country. For example, businesses may lose customers when an area has many theft cases. Therefore, the government and community must work together to prevent crime.",
  "Favourite colour": "My favourite colour is blue. I have a blue schoolbag, water bottle and several blue shirts. I like it because it makes me feel calm and comfortable. In my opinion, colours can affect our mood because bright colours can make us feel more cheerful.",
  "A shop you like": "A shop I like is a bookstore near my home. I usually buy novels, stationery and revision books there once or twice a month. I enjoy visiting it because the environment is quiet and the staff are helpful. I would join its membership programme to enjoy discounts and collect points.",
  "Eco-friendly practices": "Adopting eco-friendly practices helps to protect the environment. For example, recycling reduces waste, while switching off unused lights saves energy. These actions also protect natural resources and build responsible habits. If many people do small things every day, the overall impact can be great.",
  "Mental health": "Stress is a common mental health problem among teenagers. It may make them tired, worried and unable to focus on their studies. Teenagers can talk to a trusted adult, exercise or take short breaks to manage it. Mental health is important because it affects both our happiness and daily life.",
  "E-wallet": "An e-wallet is an application that allows us to make cashless payments. One benefit is that it is fast and convenient, but users must protect their passwords from scams. For example, students can pay at the canteen without carrying much cash. I think schools can allow e-wallets if clear safety rules are provided.",
  "Vaping": "I strongly agree that vaping among those under eighteen should be banned. It can harm teenagers' health and may lead to nicotine addiction. Schools and families should educate teenagers about these risks and provide support. In conclusion, a ban can protect young people and encourage healthier choices.",
  "Stress management": "Schoolwork and examinations sometimes make me feel stressed. I reduce stress by listening to music, exercising and planning my tasks. Managing stress is important because it helps me think clearly and stay healthy. If a friend is stressed, I will listen to them and encourage them to seek help.",
  "A healthy lifestyle": "I maintain a healthy lifestyle by exercising three times a week and eating balanced meals. I choose these habits because they keep me active and help me concentrate. For example, I walk in the evening instead of spending all my time on my phone. We can encourage others by inviting them to exercise together.",
  "Food delivery apps": "I partly agree that food delivery apps have many disadvantages. They can be costly and may encourage people to order unhealthy food too often. However, they are useful for busy families or during emergencies. Therefore, we should use these apps wisely and not depend on them every day.",
  "A movie": "I recently watched an animated movie with my best friend. I enjoyed it because the story was exciting and the characters were memorable. The movie made me feel inspired to be more courageous. I believe movies can broaden our perspective by showing us different cultures, problems and experiences.",
  "Learning something new": "Recently, I learned how to cook fried rice by watching my mother and an online video. This skill is useful because I can prepare a simple meal for myself. I also learned to be patient and follow instructions carefully. Teenagers should learn new things because useful skills make us more independent.",
  "Digital literacy": "Digital literacy is becoming a fundamental skill in every job sector. Workers need it for communication, research and completing tasks efficiently. For example, even a small business uses online payments and social media. It also helps people recognise scams and stay safe online, so it is essential for future careers.",
  "Plan after SPM": "After SPM, I plan to continue my studies in college. I want to study education because I enjoy helping others learn. My family and teachers support my decision. To prepare, I will research suitable courses, improve my English and work hard to meet the entry requirements.",
  "Your neighbours": "My neighbours are a friendly family who live next door. I meet them several times a week, and they sometimes help to collect parcels when my family is away. We also share food during festivals. Good neighbours are important because they make the community safer, friendlier and more caring.",
  "Multiple skills": "Learning multiple skills helps us in many ways. It builds confidence, improves problem-solving and prepares us for different careers. For example, a student who can communicate well and use technology can handle more tasks. These skills also make us more independent and ready for future challenges."
};

const commonTopics = [
  {
    title: "Health & Lifestyle",
    label: "健康与生活方式",
    part: "Part 3 HOTS",
    prompts: ["How can teenagers maintain a healthy lifestyle?", "Why is enough sleep important for students?", "What are effective ways to manage stress?"],
    points: ["exercise regularly", "eat balanced meals", "get enough sleep", "manage stress wisely"],
    sample: "In my opinion, teenagers can maintain a healthy lifestyle by building simple daily habits. Firstly, they should exercise regularly and eat balanced meals. For example, students can walk or play badminton three times a week. Besides that, enough sleep and good stress management help them focus better in school."
  },
  {
    title: "Environment",
    label: "环境与环保",
    part: "Part 3 HOTS",
    prompts: ["How can teenagers protect the environment?", "Why should we reduce plastic waste?", "Should schools practise recycling?"],
    points: ["reduce single-use plastic", "recycle correctly", "save water and electricity", "join community clean-ups"],
    sample: "Teenagers can protect the environment through small but consistent actions. They can use reusable bottles, recycle correctly and switch off unused lights. For example, schools can organise recycling campaigns and clean-up activities. If everyone plays a role, these habits can create a cleaner future."
  },
  {
    title: "Technology & Social Media",
    label: "科技与社交媒体",
    part: "Part 3 HOTS",
    prompts: ["Does social media bring more benefits than harm?", "Why is digital literacy important?", "How can students stay safe online?"],
    points: ["communication and learning", "screen-time control", "online scams", "protect personal information"],
    sample: "Technology is useful because it makes communication and learning faster. However, students must control their screen time and avoid sharing personal information. For example, they should check suspicious links before clicking them. Therefore, digital literacy helps teenagers enjoy technology safely and responsibly."
  },
  {
    title: "Education & Future",
    label: "教育与未来",
    part: "Part 3 HOTS",
    prompts: ["Should teenagers further their studies after SPM?", "What skills are important for future careers?", "How can students prepare for life after school?"],
    points: ["gain knowledge", "learn practical skills", "set clear goals", "research study and career options"],
    sample: "Education and practical skills are both important for a teenager's future. Further studies can provide knowledge, while communication and digital skills prepare students for work. For example, students can research suitable courses before finishing SPM. Clear goals and early preparation can give them more opportunities."
  },
  {
    title: "Family & Community",
    label: "家庭与社区",
    part: "Part 2B",
    prompts: ["Talk about an activity you enjoy with your family.", "Talk about a helpful neighbour.", "Talk about a community activity you joined."],
    points: ["what the activity is", "who was involved", "what you learned", "why relationships are important"],
    sample: "I would like to talk about having dinner with my family at weekends. Everyone helps to prepare the food, and we share stories about our week. This activity teaches me to listen and care for others. It is meaningful because spending time together makes our relationship stronger."
  },
  {
    title: "Money & Smart Spending",
    label: "金钱与精明消费",
    part: "Part 3 HOTS",
    prompts: ["How can teenagers spend money wisely?", "Are e-wallets suitable for students?", "Is buying expensive items always a bad choice?"],
    points: ["prepare a budget", "compare prices", "separate needs and wants", "avoid scams and impulse buying"],
    sample: "Teenagers can spend money wisely by preparing a simple budget and separating needs from wants. They should compare prices before buying an item. For example, a student can save part of their pocket money every week. Smart spending prevents waste and teaches financial responsibility."
  },
  {
    title: "Travel & Experiences",
    label: "旅行与个人经历",
    part: "Part 2B",
    prompts: ["Talk about a meaningful holiday.", "Talk about a place you would like to visit.", "Talk about an experience you will never forget."],
    points: ["where and when", "who was involved", "what happened", "why it was meaningful"],
    sample: "I would like to talk about a family holiday in Penang last year. We visited historical places, tried local food and took photos together. I learned more about Malaysian culture during the trip. It was meaningful because my family created happy memories together."
  },
  {
    title: "Teen Issues & Safety",
    label: "青少年课题与安全",
    part: "Part 3 HOTS",
    prompts: ["How can schools prevent bullying?", "Should vaping among teenagers be banned?", "How can teenagers deal with peer pressure?"],
    points: ["education and awareness", "clear school rules", "support from trusted adults", "make healthy choices"],
    sample: "Schools and families should work together to protect teenagers. Clear rules and awareness programmes can explain the effects of bullying, vaping and peer pressure. For example, students should be able to speak to a trusted teacher safely. Support and education help teenagers make healthier choices."
  }
];

const filters = ["All", "Trial", "Real", "Part 2A", "Part 2B", "Part 3 HOTS"];
let activeFilter = "All";
let activeQuestion = spmQuestions[0];
let practiceTimer = null;
let practiceSeconds = 60;
let mediaRecorder = null;
let micStream = null;
let audioChunks = [];
let audioUrl = "";
let speechRecognition = null;
let recordTimer = null;
let recordStartedAt = 0;
let recordedSeconds = 0;
let finalTranscript = "";
let interimTranscript = "";
let recognitionConfidence = [];
let longPauseCount = 0;
let lastSpeechResultAt = 0;
let recognitionRestartTimer = null;
let recognitionBlocked = false;
let transcriptOnlyRecognition = null;
let transcriptOnlyActive = false;
let transcriptOnlyRestartTimer = null;
let discardNextAudio = false;
let recordedBlob = null;
let lastScoreResult = null;
let activeAssignmentId = null;
let audioContext = null;
let audioAnalyser = null;
let meterFrame = null;

const RESULT_STORAGE_KEY = "msShirleySpmResultsV1";
const ASSIGNMENT_STORAGE_KEY = "msShirleyAssignmentsV1";
const REWARD_STORAGE_KEY = "msShirleyRewardClaimsV1";
const STUDENT_NAME_KEY = "msShirleyStudentNameV1";

function readStoredRows(key) {
  try { return JSON.parse(localStorage.getItem(key) || "[]"); } catch (error) { return []; }
}

function normalizedName(name) {
  return name.trim().toLowerCase();
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

function updateStudentJourney(name = localStorage.getItem(STUDENT_NAME_KEY) || "") {
  const greeting = document.querySelector("#studentGreeting");
  const completed = name ? readStoredRows(RESULT_STORAGE_KEY).filter(row => normalizedName(row.studentName || "") === normalizedName(name)).length : 0;
  const studentRows = name ? readStoredRows(RESULT_STORAGE_KEY).filter(row => normalizedName(row.studentName || "") === normalizedName(name)) : [];
  let claims = {};
  try { claims = JSON.parse(localStorage.getItem(REWARD_STORAGE_KEY) || "{}"); } catch (error) { claims = {}; }
  const earned = Math.floor(completed / 10);
  const given = claims[normalizedName(name)] || 0;
  const available = Math.max(0, earned - given);
  const step = completed % 10;
  greeting.textContent = name ? `Hi ${name}，继续勇敢开口吧！` : "准备开始今天的口语练习吗？";
  document.querySelector("#changeStudentName").textContent = name ? "更改姓名" : "填写姓名";
  document.querySelector("#rewardLabel").textContent = `${step} / 10 trainings`;
  document.querySelector("#rewardProgress").style.width = `${step * 10}%`;
  document.querySelector("#giftCount").textContent = available;
  document.querySelector("#rewardMessage").textContent = available > 0
    ? `太棒了！你有 ${available} 个小礼物可以向老师兑换 🎉`
    : completed ? `再完成 ${10 - step} 个训练，就能获得下一个小礼物！` : "完成第一个训练，开始收集星星吧！";
  const nameInput = document.querySelector("#studentName");
  if (nameInput && name && !nameInput.value) nameInput.value = name;
  const reviewed = studentRows.find(row => row.teacherComment);
  document.querySelector("#studentFeedback").innerHTML = reviewed
    ? `<strong>💛 Ms Shirley 给你的评语</strong><p>${escapeHtml(reviewed.teacherComment)}</p><small>${escapeHtml(reviewed.question)} · ${Number.isFinite(reviewed.teacherScore) ? `${reviewed.teacherScore}/25` : `${reviewed.total}/25`}</small>`
    : "<strong>💛 老师最新评语</strong><p>完成练习后，老师的鼓励会显示在这里。</p>";
}

function renderStudentAssignments() {
  const container = document.querySelector("#studentAssignments");
  const assignments = readStoredRows(ASSIGNMENT_STORAGE_KEY).filter(item => item.active !== false);
  const name = localStorage.getItem(STUDENT_NAME_KEY) || "";
  const results = readStoredRows(RESULT_STORAGE_KEY);
  container.innerHTML = assignments.length ? assignments.map(item => {
    const done = name && results.some(row => row.assignmentId === item.id && normalizedName(row.studentName || "") === normalizedName(name));
    return `<article class="assignment-card ${done ? "done" : ""}"><span class="tag">${done ? "✓ 已完成" : "待完成"}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.note || "完成一次录音和评分。")}</p><small>截止：${escapeHtml(item.dueDate || "老师未设定")}</small><button class="primary-btn" data-assignment="${escapeHtml(item.id)}" data-question-index="${item.questionIndex}">${done ? "再练一次" : "开始练习"}</button></article>`;
  }).join("") : '<div class="empty-assignment">老师还没有发布练习。你可以先从下方题库自由训练 ✨</div>';
}

function changeStudentName() {
  const current = localStorage.getItem(STUDENT_NAME_KEY) || "";
  const name = window.prompt("请输入学生姓名", current)?.trim();
  if (!name) return;
  localStorage.setItem(STUDENT_NAME_KEY, name);
  document.querySelector("#studentName").value = name;
  updateStudentJourney(name);
  renderStudentAssignments();
}

function stopMicMeter() {
  if (meterFrame) cancelAnimationFrame(meterFrame);
  meterFrame = null;
  audioAnalyser = null;
  if (audioContext) audioContext.close().catch(() => {});
  audioContext = null;
  document.querySelectorAll("#micMeter span").forEach(bar => { bar.style.height = "6px"; });
}

function startMicMeter(stream) {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  audioContext = new AudioContextClass();
  audioAnalyser = audioContext.createAnalyser();
  audioAnalyser.fftSize = 64;
  audioContext.createMediaStreamSource(stream).connect(audioAnalyser);
  const data = new Uint8Array(audioAnalyser.frequencyBinCount);
  const bars = [...document.querySelectorAll("#micMeter span")];
  const draw = () => {
    audioAnalyser.getByteFrequencyData(data);
    const average = data.reduce((sum, value) => sum + value, 0) / data.length;
    bars.forEach((bar, index) => { bar.style.height = `${Math.max(6, Math.min(28, average / 4 + index * 2))}px`; });
    meterFrame = requestAnimationFrame(draw);
  };
  draw();
}

function preferredRecordingOptions() {
  const isAppleMobile = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const appleTypes = ["audio/mp4;codecs=mp4a.40.2", "audio/mp4", "audio/webm;codecs=opus", "audio/webm"];
  const androidTypes = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg;codecs=opus"];
  const candidates = isAppleMobile ? appleTypes : androidTypes;
  const mimeType = candidates.find(type => MediaRecorder.isTypeSupported?.(type));
  return mimeType ? { mimeType } : undefined;
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Unable to read recording"));
    reader.onload = () => resolve(String(reader.result).split(",")[1] || "");
    reader.readAsDataURL(blob);
  });
}

async function transcribeRecordingInCloud(blob) {
  const status = document.querySelector("#recordStatus");
  if (!blob || !blob.size) return false;
  if (location.hostname.endsWith("github.io")) {
    status.textContent = "录音已保存。自动转文字需要使用新的 Vercel 网页；这里仍可手动输入文字稿。";
    return false;
  }
  if (blob.size > 3 * 1024 * 1024) {
    status.textContent = "录音已保存，但档案太大，无法自动转文字。请缩短录音或手动输入文字稿。";
    return false;
  }
  status.textContent = "录音已保存，正在云端转成英文文字…";
  try {
    const response = await fetch("/api/transcribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        audioBase64: await blobToBase64(blob),
        mimeType: blob.type || "audio/webm"
      })
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error || "Transcription failed");
    const text = String(result.text || "").trim();
    if (!text) throw new Error("No speech was detected");
    finalTranscript = text;
    interimTranscript = "";
    updateTranscriptField();
    status.textContent = "云端转文字完成。请检查文字稿，再取得课堂估分。";
    return true;
  } catch (error) {
    status.textContent = "录音已保存，但云端转文字暂时失败。请稍后重试，或手动输入英文文字稿。";
    return false;
  }
}

function saveAudioBlob(resultId, blob) {
  if (!blob || !("indexedDB" in window)) return Promise.resolve(false);
  return new Promise(resolve => {
    const request = indexedDB.open("MsShirleySpeaking", 1);
    request.onupgradeneeded = () => request.result.createObjectStore("recordings");
    request.onerror = () => resolve(false);
    request.onsuccess = () => {
      const transaction = request.result.transaction("recordings", "readwrite");
      transaction.objectStore("recordings").put(blob, resultId);
      transaction.oncomplete = () => { request.result.close(); resolve(true); };
      transaction.onerror = () => { request.result.close(); resolve(false); };
    };
  });
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const voice = new SpeechSynthesisUtterance(text);
  voice.lang = "en-MY";
  voice.rate = .86;
  speechSynthesis.speak(voice);
}

function formatRecordTime(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const remainder = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${remainder}`;
}

function setRecordingButtons(isRecording) {
  document.querySelector("#startRecording").disabled = isRecording;
  document.querySelector("#stopRecording").disabled = !isRecording;
  document.querySelector("#recordDot").classList.toggle("active", isRecording);
}

function updateTranscriptField() {
  document.querySelector("#speechTranscript").value = `${finalTranscript}${interimTranscript}`.trim();
}

function keepInterimTranscript() {
  const phrase = interimTranscript.trim();
  if (!phrase) return;
  finalTranscript += `${phrase} `;
  interimTranscript = "";
  updateTranscriptField();
}

function stopSpeechRecognition() {
  clearTimeout(recognitionRestartTimer);
  recognitionRestartTimer = null;
  if (!speechRecognition) return;
  keepInterimTranscript();
  speechRecognition.onend = null;
  try { speechRecognition.stop(); } catch (error) { /* It may already be stopped. */ }
  speechRecognition = null;
}

function releaseMicrophone() {
  if (!micStream) return;
  micStream.getTracks().forEach(track => track.stop());
  micStream = null;
}

function setTranscriptOnlyButton(active) {
  const button = document.querySelector("#transcriptOnly");
  button.classList.toggle("active", active);
  button.textContent = active ? "■ 停止转文字" : "Android 只转文字";
}

function stopTranscriptOnly(message = true) {
  transcriptOnlyActive = false;
  clearTimeout(transcriptOnlyRestartTimer);
  transcriptOnlyRestartTimer = null;
  setTranscriptOnlyButton(false);
  if (transcriptOnlyRecognition) {
    try { transcriptOnlyRecognition.stop(); } catch (error) { /* It may already be stopped. */ }
  } else if (message) {
    document.querySelector("#recordStatus").textContent = "转文字已停止。请检查文字稿，再取得课堂估分。";
  }
}

function startTranscriptOnlySession() {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition || !transcriptOnlyActive) return;
  let sessionFinal = "";
  let sessionInterim = "";
  let sessionCommitted = false;
  const commitSession = () => {
    if (sessionCommitted) return;
    sessionCommitted = true;
    const phrase = `${sessionFinal}${sessionInterim}`.trim();
    if (phrase) finalTranscript += `${phrase} `;
    interimTranscript = "";
    updateTranscriptField();
  };
  transcriptOnlyRecognition = new Recognition();
  transcriptOnlyRecognition.lang = "en-US";
  transcriptOnlyRecognition.continuous = false;
  transcriptOnlyRecognition.interimResults = true;
  transcriptOnlyRecognition.maxAlternatives = 1;
  transcriptOnlyRecognition.onstart = () => {
    document.querySelector("#recordStatus").textContent = "Android 只转文字进行中。请重新说英文答案；完成后按『停止转文字』。";
  };
  transcriptOnlyRecognition.onresult = event => {
    sessionFinal = "";
    sessionInterim = "";
    for (let index = 0; index < event.results.length; index += 1) {
      const phrase = event.results[index][0].transcript.trim();
      if (event.results[index].isFinal) {
        sessionFinal += `${phrase} `;
        const confidence = event.results[index][0].confidence;
        if (Number.isFinite(confidence)) recognitionConfidence.push(confidence);
      } else {
        sessionInterim += `${phrase} `;
      }
    }
    document.querySelector("#speechTranscript").value = `${finalTranscript}${sessionFinal}${sessionInterim}`.trim();
  };
  transcriptOnlyRecognition.onerror = event => {
    if (["not-allowed", "service-not-allowed", "audio-capture"].includes(event.error)) {
      transcriptOnlyActive = false;
      setTranscriptOnlyButton(false);
      document.querySelector("#recordStatus").textContent = "Android 没有允许语音识别。请在 Chrome 网站设置中允许麦克风，再按『Android 只转文字』。";
    } else if (event.error === "network") {
      document.querySelector("#recordStatus").textContent = "自动转文字需要网络连接。录音仍保留；请检查网络后再按『Android 只转文字』。";
    }
  };
  transcriptOnlyRecognition.onend = () => {
    commitSession();
    transcriptOnlyRecognition = null;
    if (transcriptOnlyActive) {
      transcriptOnlyRestartTimer = setTimeout(startTranscriptOnlySession, 450);
    } else {
      document.querySelector("#recordStatus").textContent = document.querySelector("#speechTranscript").value.trim()
        ? "转文字完成。请检查文字稿，再取得课堂估分。"
        : "没有收到英文文字。请确认 Android Chrome 有网络及麦克风权限，再重试。";
    }
  };
  try {
    transcriptOnlyRecognition.start();
  } catch (error) {
    transcriptOnlyRecognition = null;
    transcriptOnlyRestartTimer = setTimeout(startTranscriptOnlySession, 700);
  }
}

function toggleTranscriptOnly() {
  if (transcriptOnlyActive) {
    stopTranscriptOnly();
    return;
  }
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) {
    document.querySelector("#recordStatus").textContent = "这台浏览器不支持自动转文字，请使用最新版 Android Chrome，或手动输入英文答案。";
    return;
  }
  if (mediaRecorder && mediaRecorder.state === "recording") stopRecording();
  stopSpeechRecognition();
  const existing = document.querySelector("#speechTranscript").value.trim();
  finalTranscript = existing ? `${existing} ` : "";
  interimTranscript = "";
  transcriptOnlyActive = true;
  setTranscriptOnlyButton(true);
  startTranscriptOnlySession();
}

function setupSpeechRecognition() {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) {
    document.querySelector("#recordStatus").textContent = "正在录音。这个浏览器不支持自动文字，请录完后手动输入或修正答案。";
    return;
  }
  clearTimeout(recognitionRestartTimer);
  recognitionRestartTimer = null;
  speechRecognition = new Recognition();
  const isAndroid = /Android/i.test(navigator.userAgent);
  speechRecognition.lang = isAndroid ? "en-US" : "en-MY";
  // Android Chrome is more reliable with short recognition sessions. onend
  // saves the current interim phrase and immediately starts the next session.
  speechRecognition.continuous = !isAndroid;
  speechRecognition.interimResults = true;
  speechRecognition.maxAlternatives = 1;
  speechRecognition.onstart = () => {
    recognitionBlocked = false;
    document.querySelector("#recordStatus").textContent = "正在录音，也正在自动转英文文字。请用完整句子继续说。";
  };
  speechRecognition.onresult = event => {
    let currentInterimTranscript = "";
    const now = Date.now();
    if (lastSpeechResultAt && now - lastSpeechResultAt > 2800) longPauseCount += 1;
    lastSpeechResultAt = now;
    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const result = event.results[index];
      const phrase = result[0].transcript.trim();
      if (result.isFinal) {
        finalTranscript += `${phrase} `;
        if (Number.isFinite(result[0].confidence)) recognitionConfidence.push(result[0].confidence);
      } else {
        currentInterimTranscript += `${phrase} `;
      }
    }
    interimTranscript = currentInterimTranscript;
    updateTranscriptField();
  };
  speechRecognition.onerror = event => {
    if (["audio-capture", "not-allowed", "service-not-allowed"].includes(event.error)) {
      recognitionBlocked = true;
      document.querySelector("#recordStatus").textContent = "录音继续中，但浏览器没有允许自动转文字。请检查 Chrome/Safari 麦克风权限。";
      return;
    }
    if (event.error === "network") {
      document.querySelector("#recordStatus").textContent = "录音继续中，但自动转文字需要网络连接。请检查网络后继续说，或录完后手动补上文字稿。";
      return;
    }
    if (event.error !== "no-speech") {
      document.querySelector("#recordStatus").textContent = `录音继续中，自动文字正在重新连接（${event.error || "识别中断"}）。请继续说完整句子。`;
    }
  };
  speechRecognition.onend = () => {
    keepInterimTranscript();
    if (mediaRecorder && mediaRecorder.state === "recording" && !recognitionBlocked) {
      recognitionRestartTimer = setTimeout(() => setupSpeechRecognition(), 450);
    }
  };
  try {
    speechRecognition.start();
  } catch (error) {
    speechRecognition = null;
    recognitionRestartTimer = setTimeout(() => {
      if (mediaRecorder && mediaRecorder.state === "recording" && !recognitionBlocked) setupSpeechRecognition();
    }, 700);
  }
}

async function startRecording() {
  if (!navigator.mediaDevices?.getUserMedia || !("MediaRecorder" in window)) {
    document.querySelector("#recordStatus").textContent = "这个浏览器环境不能启动麦克风。请使用 iPhone Safari 或 Android Chrome 打开 HTTPS 网页；文字稿仍可直接输入评分。";
    return;
  }
  try {
    stopTranscriptOnly(false);
    micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    startMicMeter(micStream);
    audioChunks = [];
    finalTranscript = "";
    interimTranscript = "";
    recognitionConfidence = [];
    longPauseCount = 0;
    lastSpeechResultAt = 0;
    recognitionBlocked = false;
    clearTimeout(recognitionRestartTimer);
    recognitionRestartTimer = null;
    recordedSeconds = 0;
    discardNextAudio = false;
    document.querySelector("#speechTranscript").value = "";
    document.querySelector("#scoreReport").hidden = true;
    document.querySelector("#recordedAudio").hidden = true;
    recordedBlob = null;
    lastScoreResult = null;
    mediaRecorder = new MediaRecorder(micStream, preferredRecordingOptions());
    mediaRecorder.ondataavailable = event => {
      if (event.data.size > 0) audioChunks.push(event.data);
    };
    mediaRecorder.onstop = async () => {
      releaseMicrophone();
      if (discardNextAudio) {
        discardNextAudio = false;
        audioChunks = [];
        return;
      }
      const blob = new Blob(audioChunks, { type: mediaRecorder.mimeType || audioChunks[0]?.type || "audio/webm" });
      recordedBlob = blob;
      if (audioUrl) URL.revokeObjectURL(audioUrl);
      audioUrl = URL.createObjectURL(blob);
      const audio = document.querySelector("#recordedAudio");
      audio.src = audioUrl;
      audio.hidden = false;
      const transcript = document.querySelector("#speechTranscript").value.trim();
      if (transcript) {
        document.querySelector("#recordStatus").textContent = "录音完成。先回放，再检查文字稿，然后取得课堂估分。";
      } else {
        await transcribeRecordingInCloud(blob);
      }
    };
    mediaRecorder.start();
    setupSpeechRecognition();
    recordStartedAt = Date.now();
    document.querySelector("#recordTime").textContent = "00:00";
    document.querySelector("#recordStatus").textContent = "正在录音。看着答题要点，用完整句子继续说。";
    setRecordingButtons(true);
    clearInterval(recordTimer);
    recordTimer = setInterval(() => {
      recordedSeconds = Math.floor((Date.now() - recordStartedAt) / 1000);
      document.querySelector("#recordTime").textContent = formatRecordTime(recordedSeconds);
      if (recordedSeconds >= 120) {
        stopRecording();
        document.querySelector("#recordStatus").textContent = "已达到 2 分钟上限，录音已自动停止。";
      }
    }, 500);
  } catch (error) {
    releaseMicrophone();
    stopMicMeter();
    setRecordingButtons(false);
    document.querySelector("#recordStatus").textContent = "无法使用麦克风。请允许权限，或直接把学生答案输入文字稿进行评分。";
  }
}

function stopRecording(silent = false) {
  clearInterval(recordTimer);
  recordedSeconds = recordStartedAt ? Math.max(1, Math.floor((Date.now() - recordStartedAt) / 1000)) : recordedSeconds;
  document.querySelector("#recordTime").textContent = formatRecordTime(recordedSeconds);
  stopSpeechRecognition();
  stopMicMeter();
  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();
  } else {
    releaseMicrophone();
  }
  setRecordingButtons(false);
  if (!silent) document.querySelector("#recordStatus").textContent = "正在处理录音...";
}

function clearRecordingState() {
  stopTranscriptOnly(false);
  discardNextAudio = true;
  stopRecording(true);
  if (audioUrl) URL.revokeObjectURL(audioUrl);
  audioUrl = "";
  audioChunks = [];
  recordedBlob = null;
  lastScoreResult = null;
  finalTranscript = "";
  interimTranscript = "";
  recognitionConfidence = [];
  recognitionBlocked = false;
  clearTimeout(recognitionRestartTimer);
  recognitionRestartTimer = null;
  recordedSeconds = 0;
  longPauseCount = 0;
  recordStartedAt = 0;
  stopMicMeter();
  document.querySelector("#speechTranscript").value = "";
  document.querySelector("#recordedAudio").removeAttribute("src");
  document.querySelector("#recordedAudio").hidden = true;
  document.querySelector("#recordTime").textContent = "00:00";
  document.querySelector("#recordStatus").textContent = "准备录音。请先读题，再用完整句子回答。";
  document.querySelector("#scoreReport").hidden = true;
  document.querySelector("#saveStatus").textContent = "";
}

function clampScore(value) {
  return Math.max(1, Math.min(5, Math.round(value)));
}

function getContentWords(text) {
  const stopWords = new Set(["about", "after", "again", "also", "because", "before", "being", "could", "from", "have", "important", "into", "should", "that", "their", "there", "these", "they", "this", "what", "when", "where", "which", "with", "would", "your", "give", "talk", "reason"]);
  return text.toLowerCase().match(/[a-z']+/g)?.filter(word => word.length > 3 && !stopWords.has(word)) || [];
}

function scoreSpeakingResponse() {
  const transcript = document.querySelector("#speechTranscript").value.trim();
  const words = transcript.toLowerCase().match(/[a-z']+/g) || [];
  if (words.length < 5) {
    document.querySelector("#recordStatus").textContent = "答案太短，暂时无法估分。请至少说两个完整句子。";
    return;
  }
  const uniqueWords = new Set(words);
  const uniqueRatio = uniqueWords.size / words.length;
  const fillerMatches = transcript.toLowerCase().match(/\b(um+|uh+|erm+|like|you know)\b/g) || [];
  const fillerRate = fillerMatches.length / words.length;
  const connectorList = ["because", "but", "so", "however", "firstly", "secondly", "besides", "moreover", "for example", "therefore", "in conclusion", "on the other hand"];
  const usedConnectors = connectorList.filter(connector => transcript.toLowerCase().includes(connector));
  const advancedWords = [...uniqueWords].filter(word => word.length >= 8).length;
  const subjectHits = transcript.toLowerCase().match(/\b(i|we|they|he|she|students|teenagers|people|schools|families)\b/g)?.length || 0;
  const verbHits = transcript.toLowerCase().match(/\b(am|is|are|was|were|have|has|can|should|will|would|need|helps?|makes?|gives?|improves?|reduces?|protects?)\b/g)?.length || 0;

  let range = words.length >= 110 ? 5 : words.length >= 75 ? 4 : words.length >= 45 ? 3 : words.length >= 20 ? 2 : 1;
  if (uniqueRatio > .64 && advancedWords >= 3) range += 1;
  range = clampScore(range);

  let accuracy = 1;
  if (words.length >= 15) accuracy += 1;
  if (subjectHits >= 2 && verbHits >= 2) accuracy += 1;
  if (fillerRate < .08 && uniqueRatio > .48) accuracy += 1;
  if (words.length >= 85 && subjectHits >= 5 && verbHits >= 5) accuracy += 1;
  accuracy = clampScore(accuracy);

  const duration = recordedSeconds || Math.max(15, Math.round(words.length / 1.6));
  const wordsPerMinute = Math.round(words.length / (duration / 60));
  let fluency = words.length >= 100 ? 5 : words.length >= 60 ? 4 : words.length >= 30 ? 3 : words.length >= 12 ? 2 : 1;
  if (wordsPerMinute < 45 || wordsPerMinute > 190) fluency -= 1;
  if (longPauseCount >= 4 || fillerRate > .1) fluency -= 1;
  fluency = clampScore(fluency);

  const coherence = clampScore(1 + Math.min(4, usedConnectors.length));

  const bulletCoverage = activeQuestion.bullets.map(bullet => {
    const keywords = getContentWords(bullet);
    return keywords.some(keyword => transcript.toLowerCase().includes(keyword));
  });
  const coveredBullets = bulletCoverage.filter(Boolean).length;
  const coverageRatio = activeQuestion.bullets.length ? coveredBullets / activeQuestion.bullets.length : 0;
  let task = coverageRatio >= 1 ? 5 : coverageRatio >= .75 ? 4 : coverageRatio >= .5 ? 3 : coverageRatio > 0 ? 2 : 1;
  const interactionPhrases = ["i agree", "i disagree", "your point", "what do you think", "that's true", "however"];
  if (activeQuestion.part.includes("Part 3") && interactionPhrases.some(phrase => transcript.toLowerCase().includes(phrase))) task += 1;
  task = clampScore(task);

  const criteria = [
    { key: "Range", label: "词汇与句型范围", score: range },
    { key: "Accuracy", label: "语言准确度估算", score: accuracy },
    { key: "Fluency", label: "流利度", score: fluency },
    { key: "Task", label: activeQuestion.part.includes("Part 3") ? "互动与任务回应" : "任务回应", score: task },
    { key: "Coherence", label: "连贯与组织", score: coherence }
  ];
  const total = criteria.reduce((sum, item) => sum + item.score, 0);
  let level = total >= 23 ? "C1" : total >= 18 ? "B2" : total >= 12 ? "B1" : total >= 7 ? "A2" : "A1";
  if (words.length < 15) level = "A1";
  else if (words.length < 30 && ["B1", "B2", "C1"].includes(level)) level = "A2";
  else if (words.length < 50 && ["B2", "C1"].includes(level)) level = "B1";
  else if (words.length < 80 && level === "C1") level = "B2";
  const canDo = {
    A1: "Can give a few simple, prepared phrases with strong support.",
    A2: "Can give a short answer on familiar topics using basic linked phrases.",
    B1: "Can explain main points clearly and keep going despite some hesitation.",
    B2: "Can develop viewpoints with relevant detail and generally clear organisation.",
    C1: "Can express ideas fluently with a broad range and well-structured development."
  };
  const advice = {
    Range: "加入 3 个主题词和 1 个较具体的形容词，避免一直重复同一个字。",
    Accuracy: "先用稳定的 Subject + Verb + Object 句型，再用 because 延长答案。",
    Fluency: "用 60 秒练习同一题两次，目标是少停顿并保持自然速度。",
    Task: "逐一回应题目的 bullet points；每一点至少给一个原因或例子。",
    Coherence: "使用 Firstly, For example, Besides that, Therefore 来组织答案。"
  };
  const sorted = [...criteria].sort((a, b) => a.score - b.score);
  const strongest = [...criteria].sort((a, b) => b.score - a.score)[0];
  const growthArea = sorted[0];
  const encouragementTitle = total >= 23 ? "非常出色，你正在像自信的演讲者一样表达！"
    : total >= 18 ? "做得很好，你的答案越来越完整了！"
    : total >= 12 ? "很棒，你已经勇敢地把想法说出来了！"
    : "谢谢你愿意开口，每一次练习都在进步！";
  const encouragementText = `你的${strongest.label}表现最好。下一次专注一个小目标：${advice[growthArea.key]} 继续练习，Ms Shirley 相信你一定可以！`;
  const confidence = recognitionConfidence.length
    ? Math.round(recognitionConfidence.reduce((sum, value) => sum + value, 0) / recognitionConfidence.length * 100)
    : null;

  lastScoreResult = {
    total,
    level,
    criteria: Object.fromEntries(criteria.map(item => [item.key, item.score])),
    wordCount: words.length,
    wordsPerMinute,
    connectors: usedConnectors.length,
    recognitionClarity: confidence,
    transcript,
    duration,
    systemComment: encouragementText
  };

  document.querySelector("#cefrLevel").textContent = level;
  document.querySelector("#cefrTotal").textContent = total;
  document.querySelector("#cefrCanDo").textContent = canDo[level];
  document.querySelector("#cefrScoreGrid").innerHTML = criteria.map(item => `
    <article>
      <div><span>${item.key}</span><strong>${item.score}/5</strong></div>
      <p>${item.label}</p>
      <div class="score-meter"><span style="width:${item.score * 20}%"></span></div>
    </article>
  `).join("");
  document.querySelector("#cefrFeedback").innerHTML = `
    <li><strong>做得最好：</strong>${strongest.label}。</li>
    <li><strong>下一步：</strong>${advice[sorted[0].key]}</li>
    <li><strong>SPM 提醒：</strong>${coveredBullets}/${activeQuestion.bullets.length} 个答题要点有明显回应。</li>
  `;
  document.querySelector("#speechStats").innerHTML = `
    <span><strong>${words.length}</strong> words</span>
    <span><strong>${wordsPerMinute}</strong> WPM</span>
    <span><strong>${usedConnectors.length}</strong> connectors</span>
    <span><strong>${confidence === null ? "—" : `${confidence}%`}</strong> recognition clarity</span>
  `;
  document.querySelector("#encouragementTitle").textContent = encouragementTitle;
  document.querySelector("#encouragementText").textContent = encouragementText;
  document.querySelector("#scoreReport").hidden = false;
  document.querySelector("#recordStatus").textContent = "课堂估分完成。请老师回放录音，确认 pronunciation 与实际 interaction。";
}

async function submitSpeakingResult() {
  const name = document.querySelector("#studentName").value.trim();
  const status = document.querySelector("#saveStatus");
  if (!name) {
    status.textContent = "请先填写学生姓名。";
    return;
  }
  if (!lastScoreResult) {
    status.textContent = "请先完成课堂估分。";
    return;
  }
  const id = globalThis.crypto?.randomUUID?.() || `result-${Date.now()}`;
  const result = {
    id,
    studentName: name,
    question: activeQuestion.title,
    prompt: activeQuestion.prompt,
    part: activeQuestion.part,
    submittedAt: new Date().toISOString(),
    hasRecording: Boolean(recordedBlob),
    assignmentId: activeAssignmentId,
    teacherScore: null,
    teacherComment: "",
    ...lastScoreResult
  };
  let rows = [];
  try { rows = JSON.parse(localStorage.getItem(RESULT_STORAGE_KEY) || "[]"); } catch (error) { rows = []; }
  rows.unshift(result);
  localStorage.setItem(RESULT_STORAGE_KEY, JSON.stringify(rows.slice(0, 500)));
  localStorage.setItem(STUDENT_NAME_KEY, name);
  const audioSaved = await saveAudioBlob(id, recordedBlob);
  status.textContent = `已提交：${result.total}/25 · ${result.level}${recordedBlob && !audioSaved ? "（录音未能储存，但成绩已保存）" : ""}`;
  updateStudentJourney(name);
  renderStudentAssignments();
}

function filteredQuestions() {
  const q = document.querySelector("#spmSearch").value.trim().toLowerCase();
  return spmQuestions.filter(item => {
    const matchFilter = activeFilter === "All" || item.set === activeFilter || item.part === activeFilter;
    const matchText = !q || [item.source, item.set, item.part, item.title, item.prompt, ...item.bullets].join(" ").toLowerCase().includes(q);
    return matchFilter && matchText;
  });
}

function renderFilters() {
  document.querySelector("#spmFilters").innerHTML = filters.map(filter => `
    <button class="chip ${filter === activeFilter ? "active" : ""}" data-filter="${filter}">${filter}</button>
  `).join("");
}

function renderQuestions() {
  const rows = filteredQuestions();
  document.querySelector("#spmGrid").innerHTML = rows.map((item, index) => `
    <article class="spm-card">
      <div class="spm-meta">
        <span class="spm-chip ${item.set === "Real" ? "real" : ""}">${item.set}</span>
        <span class="spm-chip">${item.part}</span>
      </div>
      <h3>${item.title}</h3>
      <p class="hint">${item.prompt}</p>
      <span class="answer-ready">✓ 含万用示范答案</span>
      <ul>${item.bullets.slice(0, 4).map(point => `<li>${point}</li>`).join("")}</ul>
      <button class="primary-btn" data-open="${spmQuestions.indexOf(item)}">练这题</button>
    </article>
  `).join("");
}

function renderCommonTopics() {
  document.querySelector("#commonTopicGrid").innerHTML = commonTopics.map((topic, index) => `
    <article class="common-topic-card">
      <div class="common-topic-number">${String(index + 1).padStart(2, "0")}</div>
      <span class="tag">${topic.part}</span>
      <h3>${topic.title}</h3>
      <p class="topic-label">${topic.label}</p>
      <p class="typical-question">${topic.prompts[0]}</p>
      <div class="point-tags">${topic.points.slice(0, 3).map(point => `<span>${point}</span>`).join("")}</div>
      <button class="primary-btn" data-common-topic="${index}">随机练这格</button>
    </article>
  `).join("");
}

function openQuestion(item, assignmentId = null) {
  activeQuestion = item;
  activeAssignmentId = assignmentId;
  document.querySelector("#dialogType").textContent = `${item.source} · ${item.part}`;
  document.querySelector("#dialogTitle").textContent = item.title;
  document.querySelector("#dialogPrompt").textContent = item.prompt;
  document.querySelector("#dialogBullets").innerHTML = item.bullets.map(point => `<li>${point}</li>`).join("");
  document.querySelector("#dialogSample").textContent = item.sample || sampleAnswers[item.title] || makeUniversalSample(item);
  document.querySelector("#dialogSample").hidden = true;
  document.querySelector("#toggleSample").textContent = "显示答案";
  clearRecordingState();
  resetPracticeClock();
  document.querySelector("#spmDialog").showModal();
}

function makeUniversalSample(item) {
  const topic = item.title.toLowerCase();
  if (item.part.startsWith("Part 2")) {
    return `I would like to talk about ${topic}. It is meaningful to me because it is part of my daily life. For example, it gives me a useful experience and teaches me something new. That is why ${topic} is important to me.`;
  }
  return `In my opinion, ${topic} is an important issue. One reason is that it can affect our daily lives and future. For example, teenagers can make better choices when they understand this topic. Therefore, everyone should play a role in creating a positive change.`;
}

function buildUniversalAnswer() {
  const type = document.querySelector("#builderType").value;
  const topic = document.querySelector("#builderTopic").value.trim() || "this topic";
  const reason = document.querySelector("#builderReason").value.trim() || "it can improve our daily lives";
  const example = document.querySelector("#builderExample").value.trim() || "students can practise it at school";
  const answer = type === "personal"
    ? `I would like to talk about ${topic}. It is special to me because ${reason}. For example, ${example}. Besides that, it gives me a useful experience. That is why ${topic} is important to me.`
    : `In my opinion, ${topic} is important because ${reason}. For example, ${example}. Besides that, it can bring long-term benefits to individuals and society. Therefore, I believe everyone should play a role in making a positive change.`;
  document.querySelector("#builtAnswer").textContent = answer;
}

function resetPracticeClock() {
  clearInterval(practiceTimer);
  practiceSeconds = activeQuestion.part === "Part 3 HOTS" ? 120 : 60;
  updatePracticeClock();
  document.querySelector("#startPractice").textContent = "开始计时";
}

function updatePracticeClock() {
  const minutes = String(Math.floor(practiceSeconds / 60)).padStart(2, "0");
  const seconds = String(practiceSeconds % 60).padStart(2, "0");
  document.querySelector("#practiceTime").textContent = `${minutes}:${seconds}`;
}

function startPracticeClock() {
  resetPracticeClock();
  document.querySelector("#startPractice").textContent = "计时中";
  practiceTimer = setInterval(() => {
    practiceSeconds -= 1;
    updatePracticeClock();
    if (practiceSeconds <= 0) {
      clearInterval(practiceTimer);
      document.querySelector("#startPractice").textContent = "时间到！再试一次";
    }
  }, 1000);
}

document.querySelector("#spmFilters").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  renderFilters();
  renderQuestions();
});

document.querySelector("#spmSearch").addEventListener("input", renderQuestions);

document.querySelector("#spmGrid").addEventListener("click", event => {
  const button = event.target.closest("[data-open]");
  if (!button) return;
  openQuestion(spmQuestions[Number(button.dataset.open)]);
});

document.querySelector("#commonTopicGrid").addEventListener("click", event => {
  const button = event.target.closest("[data-common-topic]");
  if (!button) return;
  const topic = commonTopics[Number(button.dataset.commonTopic)];
  const prompt = topic.prompts[Math.floor(Math.random() * topic.prompts.length)];
  openQuestion({
    source: "High-Frequency Practice",
    set: "Practice",
    part: topic.part,
    title: topic.title,
    prompt,
    bullets: topic.points,
    sample: topic.sample
  });
});

document.querySelector("#studentAssignments").addEventListener("click", event => {
  const button = event.target.closest("button[data-assignment]");
  if (!button) return;
  const item = spmQuestions[Number(button.dataset.questionIndex)];
  if (item) openQuestion(item, button.dataset.assignment);
});

document.querySelector("#randomCard").addEventListener("click", () => {
  const rows = filteredQuestions().filter(item => item.set !== "Real" || item.part !== "Coming Soon");
  openQuestion(rows[Math.floor(Math.random() * rows.length)] || spmQuestions[0]);
});

document.querySelector("#showFramework").addEventListener("click", () => {
  document.querySelector("#answerKit").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#changeStudentName").addEventListener("click", changeStudentName);

document.querySelector("#speakQuestion").addEventListener("click", () => {
  speak(`${activeQuestion.prompt}. You should say: ${activeQuestion.bullets.join(", ")}.`);
});

document.querySelector("#toggleSample").addEventListener("click", () => {
  const sample = document.querySelector("#dialogSample");
  sample.hidden = !sample.hidden;
  document.querySelector("#toggleSample").textContent = sample.hidden ? "显示答案" : "隐藏答案";
});

document.querySelector("#startPractice").addEventListener("click", startPracticeClock);
document.querySelector("#startRecording").addEventListener("click", startRecording);
document.querySelector("#stopRecording").addEventListener("click", () => stopRecording());
document.querySelector("#clearRecording").addEventListener("click", clearRecordingState);
document.querySelector("#transcriptOnly").addEventListener("click", toggleTranscriptOnly);
document.querySelector("#scoreResponse").addEventListener("click", scoreSpeakingResponse);
document.querySelector("#submitResult").addEventListener("click", submitSpeakingResult);
document.querySelector("#buildAnswer").addEventListener("click", buildUniversalAnswer);
document.querySelector("#speakBuiltAnswer").addEventListener("click", () => speak(document.querySelector("#builtAnswer").textContent));
document.querySelector("#builderType").addEventListener("change", buildUniversalAnswer);
document.querySelector("#spmDialog").addEventListener("close", () => {
  clearInterval(practiceTimer);
  clearRecordingState();
});
window.addEventListener("storage", event => {
  if ([RESULT_STORAGE_KEY, ASSIGNMENT_STORAGE_KEY, REWARD_STORAGE_KEY].includes(event.key)) {
    updateStudentJourney();
    renderStudentAssignments();
  }
});

renderFilters();
renderQuestions();
renderCommonTopics();
buildUniversalAnswer();
updateStudentJourney();
renderStudentAssignments();
