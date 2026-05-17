# NexAIra Learner Portal — Setup Guide

## What was added to your site
- ✅ Learner Login page (email/password + Google)
- ✅ "Learner Login" button in navbar
- ✅ Learner Dashboard with two tabs:
  - **Live Meetings** — shows upcoming Zoho Meeting join links
  - **Courses & Recordings** — shows recordings from Zoho WorkDrive
- ✅ Authentication state (login persists across refresh)

---

## Step 1: Create a Supabase Project (free)

1. Go to https://app.supabase.com and sign up
2. Click **New Project** → fill in name, password, region (choose Asia South for India)
3. Wait ~2 minutes for it to set up
4. Go to **Settings → API** and copy:
   - **Project URL** → looks like `https://abcxyz.supabase.co`
   - **anon public key** → long JWT string

---

## Step 2: Add your Supabase keys

Open `.env.local` in your project root and fill in:

```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

---

## Step 3: Run the database schema

1. In Supabase Dashboard → **SQL Editor** → **New Query**
2. Paste the contents of `supabase_schema.sql`
3. Click **Run**

This creates the `courses`, `recordings`, and `meetings` tables.

---

## Step 4: Enable Google Login in Supabase

1. Supabase Dashboard → **Authentication → Providers → Google**
2. Enable it and follow the Google OAuth setup:
   - Go to https://console.cloud.google.com
   - Create a project → **APIs & Services → Credentials**
   - Create **OAuth 2.0 Client ID** (Web application)
   - Add Authorized redirect URI: `https://your-project-id.supabase.co/auth/v1/callback`
   - Copy Client ID & Secret back into Supabase
3. Also add your site URL in Supabase → **Authentication → URL Configuration**:
   - Site URL: `https://www.thenexaira.com`
   - Redirect URLs: `https://www.thenexaira.com/dashboard`

---

## Step 5: Add meetings and recordings as a trainer

### Add a meeting:
In Supabase → **Table Editor → meetings** → Insert row:
- `title`: e.g. "AI Batch — Session 15"
- `description`: topic description
- `join_url`: paste your Zoho Meeting join link
- `scheduled_at`: pick date & time
- `is_active`: true

### Add a recording:
1. First, go to **Zoho WorkDrive** → find the recording file
2. Click **Share** → **Get shareable link** → copy the link
3. In Supabase → **Table Editor → recordings** → Insert row:
   - `course_id`: pick from dropdown (must exist in courses table)
   - `title`: e.g. "Session 10: NLP Basics"
   - `zoho_drive_url`: paste the WorkDrive link
   - `duration_minutes`: e.g. 75
   - `recorded_at`: date of session
   - `order_index`: 1, 2, 3... for ordering within the course

---

## Step 6: Deploy

```bash
npm run build
```

Then deploy the `dist/` folder to your existing hosting (GitHub Pages, Netlify, Vercel, etc.)

---

## How it works end-to-end

```
Learner visits thenexaira.com
       ↓
Clicks "Learner Login"
       ↓
Logs in via Email or Google (Supabase Auth)
       ↓
Lands on Dashboard
       ↓
Live Meetings tab → Reads from Supabase meetings table → Shows Zoho join links
Courses tab       → Reads from Supabase courses + recordings → Shows Zoho WorkDrive links
```

You (the trainer) manage everything from the **Supabase Table Editor** — no code needed to add new meetings or recordings.
