// Base64 adds roughly 33%, so keep the raw recording below Vercel's
// request-body limit after it is wrapped in JSON.
const MAX_AUDIO_BYTES = 3 * 1024 * 1024;

function extensionFor(mimeType = "") {
  if (mimeType.includes("mp4")) return "m4a";
  if (mimeType.includes("ogg")) return "ogg";
  if (mimeType.includes("wav")) return "wav";
  if (mimeType.includes("mpeg")) return "mp3";
  return "webm";
}

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  const configuredOrigin = process.env.ALLOWED_ORIGIN;
  const requestOrigin = request.headers.origin;
  if (configuredOrigin && requestOrigin !== configuredOrigin) {
    return response.status(403).json({ error: "Origin not allowed" });
  }

  if (!process.env.OPENAI_API_KEY) {
    return response.status(503).json({ error: "Cloud transcription is not configured" });
  }

  const { audioBase64, mimeType = "audio/webm" } = request.body || {};
  if (typeof audioBase64 !== "string" || !audioBase64) {
    return response.status(400).json({ error: "Audio is required" });
  }

  let audioBuffer;
  try {
    audioBuffer = Buffer.from(audioBase64, "base64");
  } catch (error) {
    return response.status(400).json({ error: "Invalid audio data" });
  }
  if (!audioBuffer.length || audioBuffer.length > MAX_AUDIO_BYTES) {
    return response.status(413).json({ error: "Audio must be smaller than 3 MB" });
  }

  const form = new FormData();
  const fileName = `speaking.${extensionFor(mimeType)}`;
  form.append("file", new Blob([audioBuffer], { type: mimeType }), fileName);
  form.append("model", "gpt-4o-mini-transcribe");
  form.append("language", "en");
  form.append("response_format", "json");

  try {
    const transcriptionResponse = await fetch("https://api.openai.com/v1/audio/transcriptions", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
      body: form
    });
    const result = await transcriptionResponse.json().catch(() => ({}));
    if (!transcriptionResponse.ok) {
      console.error("Transcription failed", transcriptionResponse.status, result?.error?.code || "unknown");
      return response.status(502).json({ error: "The transcription service could not process this recording" });
    }
    const text = String(result.text || "").trim();
    if (!text) return response.status(422).json({ error: "No speech was detected" });
    return response.status(200).json({ text });
  } catch (error) {
    console.error("Transcription request failed", error?.message || "unknown");
    return response.status(502).json({ error: "The transcription service is temporarily unavailable" });
  }
};
