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

  if (!process.env.VERCEL_OIDC_TOKEN) {
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
    const transcriptionResponse = await fetch("https://ai-gateway.vercel.sh/v4/ai/transcription-model", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.VERCEL_OIDC_TOKEN}`,
        "Content-Type": "application/json",
        "ai-gateway-protocol-version": "0.0.1",
        "ai-transcription-model-specification-version": "4",
        "ai-model-id": "openai/whisper-1"
      },
      body: JSON.stringify({
        audio: audioBuffer.toString("base64"),
        mediaType: mimeType
      })
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
