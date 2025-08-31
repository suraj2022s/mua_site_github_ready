GITHUB + NETLIFY — QUICK SETUP

WHAT THIS IS
- This folder is ready to upload to GitHub and connect to Netlify Continuous Deployment.
- No build step needed. Publish directory is the repo root.

FILES YOU SHOULD SEE
- index.html
- admin.html (optional Instagram setup page)
- styles.css, script.js
- _headers  (tells Netlify not to over-cache /assets/*)
- /assets/ (logo.png, favicon.png, portfolio/…)

STEP 1 — CREATE A GITHUB REPO
1) Go to https://github.com/new → name it e.g. "mua-site" → Create.
2) Click "Add file" → "Upload files" → drag EVERYTHING from this folder (don’t zip it).
3) Click "Commit changes".

STEP 2 — CONNECT NETLIFY TO YOUR REPO (ONE-TIME)
1) Netlify → your site → Site settings → Build & deploy → Continuous Deployment.
2) Click "Link to a Git provider" → choose GitHub and pick your repo.
3) Build settings:
   - Build command: (leave blank)
   - Publish directory: .
4) Save. Netlify will deploy automatically. Copy the live URL it shows.

STEP 3 — CHANGE PHOTOS ONLINE (ANYTIME)
1) On GitHub open assets/portfolio/.
2) Click "Add file" → "Upload files" → drag new photos.
   - If you keep the same names (image1.jpg … image9.jpg), you don’t need to edit index.html.
   - If you change names, open index.html on GitHub → click the ✏️ edit icon → update the <img src="..."> paths → Commit.
3) Netlify auto-publishes. Hard refresh to see changes (Cmd+Shift+R or Ctrl+Shift+R).

OPTIONAL — INSTAGRAM AUTO-GALLERY (LOCAL ONLY)
- Visit https://YOUR-SITE/admin.html and paste your Instagram User ID + Long-lived token.
- That will make the Instagram section auto-fill for you on your device.
- If you want it to work for all visitors, tell me and I’ll ship a serverless function build.
