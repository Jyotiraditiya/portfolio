Local development (macOS, zsh)

1. From project root:

   # install
   npm install

   # run dev
   npm run dev

2. Build & start (production-like):

   npm run build
   npm start

Environment variables (recommended)

- SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS  -> for contact form email sending
- CONTACT_EMAIL -> email address to receive contact form messages
- GITHUB_TOKEN -> optional, for GitHub API features

Vercel deployment

1. Push repository to GitHub.
2. Create a new project on Vercel and import the GitHub repo.
3. In Vercel project settings, add environment variables listed above.
4. Build & Output Settings: Next.js defaults are fine (framework detected).
5. Deploy. The site will be available at <your-vercel-subdomain>.vercel.app

Notes

- Place an optimized GLB model at public/models/transformer.glb (recommended < 10MB).
- Place resume PDF at public/resume.pdf if you want the Resume link to work.
- Large 3D assets should be served from a CDN for best performance.
