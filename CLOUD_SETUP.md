# Ms Shirley cloud setup

The current prototype stores results and recordings on one device. To let students submit from their own iPhone or Android phone, create a Supabase project and connect these records:

- `profiles`: student display name and teacher ownership
- `assignments`: title, question index, note, due date and active state
- `speaking_results`: scores, transcript, feedback, assignment and submission time
- `recordings`: private audio files in Supabase Storage
- `reward_claims`: student, earned gifts and redeemed gifts

Enable Row Level Security. Students may insert and read only their own results. Only authenticated teachers may list all results, change final scores, write comments, publish assignments or redeem gifts.

Copy `supabase-config.example.js` to `supabase-config.js` and enter the project URL and public anon key. Do not put the Supabase service-role key in this GitHub Pages repository.

Microphone recording requires HTTPS. GitHub Pages already provides HTTPS, which is suitable for iPhone Safari and Android Chrome.

## Vercel cloud transcription

Deploy this repository as a Vercel project and add `CLOUDFLARE_ACCOUNT_ID` plus the secret `CLOUDFLARE_API_TOKEN` to its production environment. The token must have only Workers AI Read/Edit permissions and must never be stored in GitHub or exposed to the browser.

The browser sends the completed recording to `/api/transcribe`. The Function accepts same-origin requests only, limits audio to 3 MB, and forwards it to Cloudflare Workers AI using `@cf/openai/whisper-large-v3-turbo`. GitHub Pages cannot run this server function; students must use the Vercel deployment URL for automatic cloud transcription. On Cloudflare's Free plan, requests stop after the daily free allocation is exhausted instead of continuing as paid overage.
