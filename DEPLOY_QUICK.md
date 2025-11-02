# ⚡ Quick Deployment Steps

## 🎯 Step-by-Step (10 minutes total)

### ✅ Step 1: Push to GitHub (2 minutes)

```bash
# In your project root (d:\School)
git init
git add .
git commit -m "Ready for deployment"
git branch -M main
git remote add origin https://github.com/Akankshaakku/school-final.git
git push -u origin main
```

---

### ✅ Step 2: Deploy Frontend on Vercel (3 minutes)

1. Go to **[vercel.com](https://vercel.com)** → Sign up (use GitHub)
2. Click **"New Project"**
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend` ⚠️ Important!
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
5. Click **"Deploy"** (don't add env vars yet)
6. **Wait for deployment** → Copy your frontend URL
   - Example: `https://cpps-school.vercel.app`

---

### ✅ Step 3: Deploy Backend on Railway (3 minutes)

1. Go to **[railway.app](https://railway.app)** → Sign up (use GitHub)
2. Click **"New Project"** → **"Deploy from GitHub repo"**
3. Select your repository
4. Click **"+ New"** → **"GitHub Repo"**
5. Configure:
   - **Root Directory**: `backend` ⚠️ Important!
   - Railway will auto-detect Node.js
6. Go to **"Variables"** tab → Add:
   ```
   NODE_ENV = production
   FRONTEND_URL = https://your-frontend.vercel.app (paste from Step 2)
   JWT_SECRET = generate-random-string-here-12345
   PORT = 5000
   ```
7. Click **"Deploy"** → Wait for deployment
8. Copy your backend URL:
   - Example: `https://cpps-backend-production.up.railway.app`
   - Note: Add `/api` at the end for API calls!

---

### ✅ Step 4: Connect Frontend to Backend (2 minutes)

1. Go back to **Vercel** → Your project → **Settings** → **Environment Variables**
2. Add new variable:
   - **Name**: `REACT_APP_API_URL`
   - **Value**: `https://your-backend.railway.app/api` (your Railway URL + /api)
3. Click **"Save"**
4. Go to **"Deployments"** tab → Click **"..."** on latest → **"Redeploy"**

---

## 🎉 Done!

Your website is now live:
- **Frontend**: `https://your-frontend.vercel.app`
- **Backend API**: `https://your-backend.railway.app/api`

---

## 🧪 Test Your Deployment

1. **Visit your frontend URL**
2. **Open browser console** (F12)
3. **Test features**:
   - ✅ Dark mode toggle
   - ✅ Contact form submission
   - ✅ Navigation between pages
   - ✅ Images loading

---

## 🔧 Troubleshooting

**Issue**: Frontend shows errors
- ✅ Check Vercel deployment logs
- ✅ Verify `REACT_APP_API_URL` is set correctly

**Issue**: API calls fail (CORS errors)
- ✅ Check Railway logs
- ✅ Verify `FRONTEND_URL` in Railway matches your Vercel URL exactly
- ✅ Make sure backend URL ends with `/api` in frontend env var

**Issue**: Build fails
- ✅ Check that `package.json` has all dependencies
- ✅ Check deployment logs for specific errors

---

## 💰 Cost

- **Vercel**: Free ✅ (unlimited deployments)
- **Railway**: $5 free credit/month (usually enough for small sites)
  - If you run out, upgrade to Hobby ($5/month)

---

## 🎯 Next Steps (Optional)

1. **Custom Domain**: 
   - Vercel: Settings → Domains → Add your domain
   - Railway: Settings → Custom Domain

2. **Environment Variables**:
   - Update `FRONTEND_URL` in Railway if you get a custom domain

3. **Monitor**:
   - Check Railway metrics
   - Check Vercel analytics

---

**Need help? Check the detailed guides:**
- `DEPLOYMENT_GUIDE.md` - Full documentation
- `README_DEPLOYMENT.md` - Quick reference

Good luck! 🚀

