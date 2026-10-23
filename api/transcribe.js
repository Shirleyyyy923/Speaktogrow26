// Base64 adds roughly 33%, so keep the raw recording below Vercel's
// request-body limit after it is wrapped in JSON.
const MAX_AUDIO_BYTES = 3 * 1024 * 1024;

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  const requestOrigin = request.headers.origin;
  const requestHost = request.headers["x-forwarded-host"] || request.headers.host;
  let originHost = "";
  try { originHost = requestOrigin ? new URL(requestOrigin).host : ""; } catch (error) { originHost = ""; }
  if (!originHost || !requestHost || originHost !== requestHost) {
    return response.status(403).json({ error: "Origin not allowed" });
  }

  const cloudflareAccountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const cloudflareApiToken = process.env.CLOUDFLARE_API_TOKEN;
  if (!cloudflareAccountId || !cloudflareApiToken) {
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

  try {
    const transcriptionResponse = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${encodeURIComponent(cloudflareAccountId)}/ai/run/@cf/openai/whisper-large-v3-turbo`,
      {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cloudflareApiToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        audio: audioBuffer.toString("base64"),
        task: "transcribe",
        language: "en",
        // Android microphones can be quiet. Cloudflare's VAD may otherwise
        // remove the whole answer as silence before Whisper sees it.
        vad_filter: false
      })
    });
    const result = await transcriptionResponse.json().catch(() => ({}));
    if (!transcriptionResponse.ok) {
      console.error(
        "Transcription failed",
        transcriptionResponse.status,
        result?.errors?.[0]?.code || result?.errors?.[0]?.message || result?.error || "unknown"
      );
      return response.status(502).json({ error: "The transcription service could not process this recording" });
    }
    const text = String(result?.result?.text || result?.text || "").trim();
    if (!text) {
      console.warn("No speech detected", { bytes: audioBuffer.length, mimeType: String(mimeType).slice(0, 80) });
      return response.status(422).json({ error: "No clear English speech was detected" });
    }
    console.info("Transcription completed", { bytes: audioBuffer.length, mimeType: String(mimeType).slice(0, 80), characters: text.length });
    return response.status(200).json({ text });
  } catch (error) {
    console.error("Transcription request failed", error?.message || "unknown");
    return response.status(502).json({ error: "The transcription service is temporarily unavailable" });
  }
};
