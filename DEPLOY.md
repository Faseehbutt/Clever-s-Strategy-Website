# Deployment Guide - GitHub & Vercel

## Step 1: Push to GitHub

### 1.1 Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `clever-community` (or any name you like)
4. **Important:** Leave it **Public** or **Private** (your choice)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **"Create repository"**

### 1.2 Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

**If you already have a repo URL, replace `YOUR_USERNAME` and `YOUR_REPO_NAME`:**

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

**OR if you prefer SSH:**

```bash
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy on Vercel

### 2.1 Sign Up / Sign In to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"**
3. **Best option:** Sign in with your **GitHub account** (makes deployment easier)

### 2.2 Import Your Project

1. After logging in, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find your repository (`clever-community` or whatever you named it)
4. Click **"Import"**

### 2.3 Configure Project Settings

Vercel will automatically detect it's a Next.js project! Just:

1. **Framework Preset:** Should auto-detect as "Next.js" ✅
2. **Root Directory:** Leave as `./` (default)
3. **Build Command:** Should be `npm run build` (auto-detected) ✅
4. **Output Directory:** Leave empty (auto-detected) ✅
5. **Install Command:** Should be `npm install` (auto-detected) ✅

**Environment Variables:** (Not needed for this project, skip this)

### 2.4 Deploy!

1. Click **"Deploy"** button
2. Wait 2-3 minutes for the build to complete
3. 🎉 **Your site is live!**

Vercel will give you a URL like:
- `https://clever-community-xyz123.vercel.app`
- Or a custom domain if you set one up

---

## Step 3: Future Updates

Every time you push to GitHub:

```bash
git add .
git commit -m "Your update message"
git push
```

Vercel will **automatically deploy** the new version! 🚀

---

## Troubleshooting

### If build fails on Vercel:

1. Make sure you ran `npm install` locally and it worked
2. Check Vercel build logs for errors
3. Common issues:
   - Missing dependencies in `package.json`
   - TypeScript errors (we've fixed these!)
   - Build command issues

### If you need to change branch:

- Go to Vercel project settings → Git
- Change the production branch to `main` or `master`

---

## Tips

- ✅ Vercel automatically deploys from `main` branch
- ✅ Every push = automatic deployment
- ✅ Preview deployments for pull requests
- ✅ Free SSL certificate (HTTPS)
- ✅ Free custom domain support

Good luck! 🚀
