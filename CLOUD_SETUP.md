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
