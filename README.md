# RR Skillverse
### Intelligent Enterprise Development with .NET 8 & Azure AI
**By Raushan Ranjan — Microsoft Certified Trainer, Koenig Solutions**

---

## Project Structure

```
rr-skillverse/
├── server.js          ← Express backend (secure Azure proxy)
├── package.json
├── render.yaml        ← Render.com deploy config
├── .env.example       ← Template for your secrets
├── .gitignore         ← Keeps .env out of git
└── public/
    └── index.html     ← Frontend (calls your backend only)
```

---

## Step 1 — Local Setup

```bash
# 1. Go into the project folder
cd rr-skillverse

# 2. Install dependencies
npm install

# 3. Create your .env file from the template
cp .env.example .env
```

Now open `.env` and fill in your real values:

```env
AZURE_OPENAI_ENDPOINT=https://YOUR-RESOURCE.openai.azure.com
AZURE_OPENAI_KEY=your-actual-key
AZURE_OPENAI_DEPLOYMENT=gpt-4o
AZURE_OPENAI_API_VERSION=2024-08-01-preview
```

```bash
# 4. Run locally to test
npm start
# Open http://localhost:3000
```

---

## Step 2 — Push to GitHub

```bash
# Inside the rr-skillverse folder:

# Initialize git (first time only)
git init

# Add all files (.env is excluded by .gitignore automatically)
git add .

# Commit
git commit -m "Initial commit — RR Skillverse"

# Create a repo on github.com, then connect it:
git remote add origin https://github.com/YOUR-USERNAME/rr-skillverse.git

# Push
git branch -M main
git push -u origin main
```

> ✅ Verify on GitHub that there is NO `.env` file in your repo.
> Only `.env.example` should be visible. If you see `.env`, stop and check your `.gitignore`.

---

## Step 3 — Deploy on Render.com

1. Go to [render.com](https://render.com) → Sign in with GitHub

2. Click **New → Web Service**

3. Connect your `rr-skillverse` GitHub repository

4. Render auto-detects `render.yaml` — settings are pre-filled:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Runtime:** Node

5. Scroll to **Environment Variables** — add these three:

   | Key | Value |
   |-----|-------|
   | `AZURE_OPENAI_ENDPOINT` | `https://YOUR-RESOURCE.openai.azure.com` |
   | `AZURE_OPENAI_KEY` | your actual key |
   | `AZURE_OPENAI_DEPLOYMENT` | `gpt-4o` |

6. Click **Create Web Service**

7. Wait ~2 minutes for the first deploy to complete

8. Your site is live at: `https://rr-skillverse.onrender.com`

---

## Step 4 — Share with Students

Send your students the Render URL. That's it.

- They open the site → lessons generate via your Azure GPT-4o
- Your API key is **never sent to their browser** — it lives only on Render
- Each student's progress is saved in their own browser (localStorage)

---

## Updating the Site

Whenever you make changes:

```bash
git add .
git commit -m "describe your change"
git push
```

Render auto-deploys on every push to `main`. Live in ~60 seconds.

---

## Security Summary

| What | Where | Exposed to students? |
|------|-------|----------------------|
| Azure API Key | Render environment variables | ❌ Never |
| Azure Endpoint | Render environment variables | ❌ Never |
| Frontend HTML/JS | Public (as it should be) | ✅ Yes |
| Student progress | Their browser localStorage | Local only |

All AI calls: `Student Browser → Render Server → Azure OpenAI`
The key never leaves your server.

---

## Rate Limits (built in)

- Lesson generation: **30 requests per IP per 10 minutes**
- Doubt questions: **60 requests per IP per 10 minutes**

Adjust in `server.js` if needed.
