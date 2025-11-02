# 🚀 Complete Deployment Guide

## Overview
This project needs to be deployed in two parts:
- **Frontend** (React App) → Deploy on **Vercel** or **Netlify**
- **Backend** (Node.js API) → Deploy on **Railway** or **Render**

---

## 📋 Prerequisites
- ✅ GitHub account
- ✅ Code pushed to GitHub repository
- ✅ Accounts on deployment platforms (we'll create these)

---

## 🎯 Option 1: Deploy on Vercel (Frontend) + Railway (Backend)

### Step 1: Deploy Frontend on Vercel

1. Go to **[vercel.com](https://vercel.com)** → **Sign up** (use GitHub)
2. Click **"Add New..."** → **"Project"**
3. **Import Git Repository** → Select `New-School`
4. Configure project settings:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend` ⚠️ **IMPORTANT!**
   - **Build Command**: `npm install && npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

5. **Environment Variables** (skip for now, we'll add after backend is deployed)
6. Click **"Deploy"**
7. Wait for deployment → Copy your frontend URL (e.g., `https://cpps-school.vercel.app`)

---

### Step 2: Deploy Backend on Railway

1. Go to **[railway.app](https://railway.app)** → **Sign up** (use GitHub)
2. Click **"New Project"** → **"Deploy from GitHub repo"**
3. Select your repository: `New-School`
4. Click **"+ New"** → **"GitHub Repo"**
5. Railway will auto-detect Node.js
6. Configure settings:
   - **Root Directory**: `backend` ⚠️ **IMPORTANT!**
   
7. Go to **"Variables"** tab → Add these environment variables:
   ```
   NODE_ENV=production
   FRONTEND_URL=https://your-frontend-url.vercel.app
   JWT_SECRET=your-random-secret-key-12345
   PORT=5000
   ```
   *(Replace `your-frontend-url.vercel.app` with your actual Vercel URL)*

8. Click **"Deploy"** → Wait for deployment
9. Copy your backend URL from Railway dashboard
   - Example: `https://cpps-backend-production.up.railway.app`
   - **Important**: Add `/api` when using it in frontend!

---

### Step 3: Connect Frontend to Backend

1. Go back to **Vercel** → Your project → **Settings** → **Environment Variables**
2. Click **"Add New"**:
   - **Name**: `REACT_APP_API_URL`
   - **Value**: `https://your-backend-url.railway.app/api`
   - **Environment**: Production, Preview, Development (select all)
3. Click **"Save"**
4. Go to **"Deployments"** → Click **"..."** on latest → **"Redeploy"**

---

## 🎯 Option 2: Deploy on Netlify (Frontend) + Railway (Backend)

### Step 1: Deploy Frontend on Netlify

1. Go to **[netlify.com](https://netlify.com)** → **Sign up** (use GitHub)
2. Click **"Add new site"** → **"Import an existing project"**
3. Click **"Deploy with GitHub"** → Authorize Netlify
4. Select repository: `New-School`
5. Configure build settings:
   - **Base directory**: `frontend`
   - **Build command**: `npm install && npm run build`
   - **Publish directory**: `frontend/build`
6. Click **"Deploy site"**
7. Wait for deployment → Copy your frontend URL (e.g., `https://cpps-school.netlify.app`)

---

### Step 2: Deploy Backend on Railway
*(Same as Option 1, Step 2 - just use your Netlify URL instead of Vercel URL)*

---

### Step 3: Connect Frontend to Backend

1. Go to **Netlify** → Your site → **Site configuration** → **Environment variables**
2. Click **"Add a variable"**:
   - **Key**: `REACT_APP_API_URL`
   - **Value**: `https://your-backend-url.railway.app/api`
   - **Scopes**: Production, Deploy previews, Branch deploys
3. Click **"Save"**
4. Go to **"Deploys"** → Click **"Trigger deploy"** → **"Deploy site"**

---

## 🧪 Testing Your Deployment

1. Visit your frontend URL
2. Open browser console (F12)
3. Test features:
   - ✅ Navigation works
   - ✅ Dark mode toggle
   - ✅ Contact form submission
   - ✅ Images load correctly
   - ✅ No CORS errors in console

---

## 🔧 Troubleshooting

### Frontend shows errors
- ✅ Check deployment logs (Vercel/Netlify)
- ✅ Verify `REACT_APP_API_URL` is set correctly
- ✅ Make sure variable starts with `REACT_APP_` prefix

### API calls fail (CORS errors)
- ✅ Check Railway logs
- ✅ Verify `FRONTEND_URL` in Railway matches your frontend URL exactly
- ✅ Make sure no trailing slashes in URLs
- ✅ Ensure backend URL includes `/api` in frontend env var

### Build fails
- ✅ Check deployment logs for specific errors
- ✅ Verify `package.json` has all dependencies
- ✅ Make sure Root Directory is set to `frontend` or `backend`

### Images not loading
- ✅ Check if images are in `public/image/` folder
- ✅ Verify image paths are relative (starting with `/image/...`)
- ✅ Check browser console for 404 errors

### Page refresh shows 404 (SPA routing)
- ✅ For Netlify: Ensure `netlify.toml` exists in `frontend/` directory
- ✅ For Vercel: Configure redirects in `vercel.json`

---

## 💰 Pricing

| Platform | Free Tier | Paid Plans |
|----------|-----------|------------|
| **Vercel** | ✅ Unlimited deployments, 100GB bandwidth | Pro: $20/month |
| **Netlify** | ✅ 100GB bandwidth, 300 build minutes/month | Pro: $19/month |
| **Railway** | ✅ $5 free credit/month | Hobby: $5/month |

**Recommendation**: Start with free tiers - they're usually enough for small to medium sites!

---

## ✅ Quick Checklist

Before deployment:
- [ ] Code is pushed to GitHub
- [ ] All dependencies are in `package.json`
- [ ] Environment variables are documented
- [ ] `.gitignore` excludes `node_modules` and `.env`

After deployment:
- [ ] Frontend is accessible
- [ ] Backend API is accessible
- [ ] Environment variables are set
- [ ] CORS is configured correctly
- [ ] All features tested

---

## 🎉 You're Done!

Your website should now be live! Share your URLs:
- **Frontend**: `https://your-site.vercel.app` or `https://your-site.netlify.app`
- **Backend API**: `https://your-backend.railway.app/api`

**Need help?** Check the deployment platform documentation:
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
- Railway: https://docs.railway.app

