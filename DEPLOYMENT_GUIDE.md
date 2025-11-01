# 🚀 CPPS Website Deployment Guide

Complete guide to deploy your school website online.

## 📋 Deployment Options

### Recommended Platforms:
- **Frontend (React)**: Vercel (Easiest) or Netlify
- **Backend (Node.js)**: Railway or Render

---

## 🌐 Option 1: Deploy with Vercel + Railway (Recommended)

### Step 1: Deploy Frontend on Vercel

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/cpps-school.git
   git push -u origin main
   ```

2. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Set the following:
     - **Framework Preset**: Create React App
     - **Root Directory**: `frontend`
     - **Build Command**: `npm run build`
     - **Output Directory**: `build`
     - **Install Command**: `npm install`

3. **Add Environment Variables** in Vercel:
   - Go to Project Settings → Environment Variables
   - Add: `REACT_APP_API_URL` = `https://your-backend-url.railway.app/api`

4. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete
   - Your frontend will be live! 🎉

---

### Step 2: Deploy Backend on Railway

1. **Create Railway Account**:
   - Visit [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Create New Project**:
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Select your repository
   - Add service → Select `backend` folder

3. **Configure Railway**:
   - Set **Root Directory**: `backend`
   - Set **Start Command**: `npm start`
   - Railway will auto-detect Node.js

4. **Add Environment Variables** in Railway:
   - Go to Variables tab
   - Add:
     ```
     NODE_ENV=production
     PORT=5000 (or use Railway's auto PORT)
     FRONTEND_URL=https://your-frontend.vercel.app
     JWT_SECRET=your-super-secret-jwt-key-change-this
     ```

5. **Deploy**:
   - Railway will automatically deploy
   - Note your backend URL (e.g., `https://cpps-backend.railway.app`)

6. **Update Frontend API URL**:
   - Go back to Vercel
   - Update `REACT_APP_API_URL` environment variable
   - Redeploy frontend

---

## 🌐 Option 2: Deploy with Netlify + Render

### Step 1: Deploy Frontend on Netlify

1. **Push code to GitHub** (if not done)

2. **Go to Netlify**:
   - Visit [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository

3. **Configure Build Settings**:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/build`

4. **Add Environment Variables**:
   - Site settings → Environment variables
   - Add: `REACT_APP_API_URL` = `https://your-backend.onrender.com/api`

5. **Deploy**:
   - Click "Deploy site"
   - Wait for build

---

### Step 2: Deploy Backend on Render

1. **Create Render Account**:
   - Visit [render.com](https://render.com)
   - Sign up with GitHub

2. **Create New Web Service**:
   - Click "New" → "Web Service"
   - Connect your GitHub repository

3. **Configure Render**:
   - **Name**: `cpps-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

4. **Add Environment Variables**:
   ```
   NODE_ENV=production
   PORT=10000 (Render uses this)
   FRONTEND_URL=https://your-site.netlify.app
   JWT_SECRET=your-super-secret-jwt-key
   ```

5. **Deploy**:
   - Click "Create Web Service"
   - Wait for deployment
   - Note your backend URL

---

## 📝 Important Notes

### Environment Variables Setup:

**Frontend (Vercel/Netlify):**
```
REACT_APP_API_URL=https://your-backend-url.railway.app/api
```

**Backend (Railway/Render):**
```
NODE_ENV=production
PORT=5000 (or auto)
FRONTEND_URL=https://your-frontend.vercel.app
JWT_SECRET=your-secret-key-change-this
```

### File-based Storage:
- Your backend uses file-based storage (`backend/data/files/`)
- These files will persist on the server
- No database setup required! ✅

---

## 🔧 Troubleshooting

### Frontend Issues:
1. **API not connecting**: Check `REACT_APP_API_URL` environment variable
2. **Build fails**: Make sure all dependencies are in `package.json`
3. **Images not loading**: Check public folder paths

### Backend Issues:
1. **CORS errors**: Update `FRONTEND_URL` in backend env variables
2. **Port issues**: Use platform's auto-assigned PORT (Railway/Render)
3. **Build fails**: Check Node.js version compatibility

---

## 🎉 After Deployment

1. Test your website: Visit your frontend URL
2. Test API: Check if contact form works
3. Test Dark Mode: Toggle should work
4. Check Console: No errors in browser console

---

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Railway Docs: https://docs.railway.app
- Netlify Docs: https://docs.netlify.com
- Render Docs: https://render.com/docs

---

## 🎯 Quick Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Frontend deployed (Vercel/Netlify)
- [ ] Backend deployed (Railway/Render)
- [ ] Environment variables set in both
- [ ] API URL updated in frontend
- [ ] CORS URL updated in backend
- [ ] Website tested and working
- [ ] Domain configured (optional)

Good luck with your deployment! 🚀

