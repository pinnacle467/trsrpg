# The Realm Survivor RPG — Marketing Site

Official marketing site for **The Realm Survivor RPG** by **Monarchy Knuckle Games**.

- **Frontend**: React 19 (CRA + craco), Tailwind, Framer Motion, React Router
- **Backend** (optional, not used in production): FastAPI + MongoDB
- **Hosting**: Static deploy on Hostinger Business via GitHub auto-deploy

---

## One-time Hostinger setup (do this once)

> The GitHub Actions workflow in `.github/workflows/deploy.yml` already builds
> the React app on every push to `main` and publishes the output to a `dist`
> branch. Hostinger just needs to be told to watch that branch.

1. **Push this repo to GitHub** (use Emergent's "Save to GitHub" button, or
   `git push`). Make sure GitHub Actions is enabled on the repo
   (Settings → Actions → "Allow all actions"). The first push to `main`
   will trigger a build that creates the `dist` branch automatically — give
   it ~2 minutes, then verify the `dist` branch exists on GitHub.

2. **Connect Hostinger to GitHub:**
   - Log in to <https://hpanel.hostinger.com> → **Websites** → pick
     `therealmsurvivorrpg.com` → **Manage**.
   - Go to **Advanced → GitHub** (or **Git**).
   - Connect your GitHub account (Personal Access Token with `repo` scope
     is the most reliable option).
   - **Repository**: this repo
   - **Branch**: `dist`
   - **Deployment path**: `public_html`
   - **Auto-deploy**: ON
   - Click **Force Deploy** for the initial sync.

3. **SSL / domain:**
   - Hostinger usually auto-provisions a Let's Encrypt cert.
   - In hPanel → **SSL**, enable **Force HTTPS**.
   - The included `.htaccess` also redirects HTTP → HTTPS as a safety net.

That's it. You only do this once.

---

## Day-to-day workflow

1. Edit the site in Emergent (or locally).
2. Push to `main` (Emergent's "Save to GitHub" button, or `git push origin main`).
3. GitHub Actions builds the bundle and pushes to `dist` (~2 min).
4. Hostinger's webhook pulls `dist` into `public_html` (~1 min).
5. Refresh `https://therealmsurvivorrpg.com` — done.

The `.htaccess` we ship in `frontend/public/.htaccess` handles:
- React Router deep links (no 404 on `/media`, `/support`, `/pimps`)
- HTTPS forcing
- Long-term cache headers for hashed assets, no-cache for `index.html`
- Gzip compression

---

## Local development

```bash
# Frontend
cd frontend
yarn install
yarn start              # http://localhost:3000

# Backend (optional, not required for the marketing site)
cd backend
pip install -r requirements.txt
uvicorn server:app --reload --port 8001
```

Environment variables live in `frontend/.env` and `backend/.env` — don't commit
secrets.

---

## Production build (manual)

```bash
cd frontend
yarn install
yarn build
# output: frontend/build/   (~107 MB including /realm assets)
```

You can also trigger a build via GitHub: **Actions → Build & Deploy to Hostinger
→ Run workflow**.

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| `/pimps` etc. 404 on the live site | Confirm `.htaccess` is in `public_html`. |
| Site shows old content after a push | Hard-refresh (Ctrl+Shift+R); check GitHub Actions ran; check Hostinger deploy log. |
| GitHub Actions fails on `yarn install` | Make sure `frontend/yarn.lock` is committed. |
| Deploy succeeded but Hostinger didn't pull | hPanel → GitHub → click **Force Deploy** once. Re-check the auto-deploy toggle. |
| Backend ever needed in the future | Hostinger Business can't run Python. Deploy backend to Railway / Render / Emergent and set CORS to allow `https://therealmsurvivorrpg.com`. |

---

© Monarchy Knuckle Games · Founded 2021
