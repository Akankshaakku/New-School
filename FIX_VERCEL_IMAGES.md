# 🔧 Fix Missing Images on Vercel Deployment

## Problem
Images are missing on your Vercel deployment (https://school-woad-three.vercel.app/) because:
- Images are stored in **Git LFS** (Large File Storage)
- Vercel build process doesn't automatically download Git LFS files
- Only LFS pointer files are deployed, not actual images

## ✅ Solution Options

### Option 1: Install Git LFS in Vercel Build Command (Recommended)

**In Vercel Dashboard:**
1. Go to your project → **Settings** → **General**
2. Find **Build & Development Settings**
3. Update **Build Command** to:
   ```bash
   npm install && curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | bash && apt-get install git-lfs -y && git lfs pull && npm run build
   ```
4. Or simpler (if Git LFS is pre-installed):
   ```bash
   npm install && git lfs pull && npm run build
   ```

**OR Update in Vercel UI:**
1. Go to **Settings** → **Build & Development Settings**
2. **Build Command**: `npm install && git lfs pull && npm run build`
3. **Output Directory**: `build`
4. Click **Save**

### Option 2: Use Environment Variable for Git LFS

**In Vercel Dashboard:**
1. Go to **Settings** → **Environment Variables**
2. Add: `ENABLE_GIT_LFS` = `true`
3. Then update Build Command to check: `npm install && (git lfs pull || echo 'LFS skipped') && npm run build`

### Option 3: Manual Fix - Commit Images Without LFS (Not Recommended for Large Files)

If the above doesn't work, you might need to temporarily remove images from LFS:
```bash
git lfs untrack "*.png"
git lfs untrack "*.jpg"
git lfs untrack "*.jpeg"
git add .gitattributes
git commit -m "Remove images from LFS"
git push
```
⚠️ Warning: This will increase repository size significantly!

## 🚀 Quick Fix Steps

1. **Push the updated `vercel.json` and `frontend/vercel.json` files:**
   ```bash
   git add frontend/vercel.json vercel.json frontend/package.json
   git commit -m "Fix: Add Git LFS pull to Vercel build process"
   git push
   ```

2. **Update Vercel Build Settings:**
   - Go to https://vercel.com
   - Select your project
   - Settings → Build & Development Settings
   - Build Command: `npm install && git lfs pull && npm run build`
   - Save

3. **Redeploy:**
   - Go to **Deployments** tab
   - Click **"..."** on latest deployment
   - Click **"Redeploy"**

## ✅ Verify Fix

After redeploying, check:
- ✅ Logo appears in navbar
- ✅ Faculty images load correctly
- ✅ Facility images (labs, library, etc.) display
- ✅ Gallery images work
- ✅ Home page images show

## 📝 Notes

- Vercel supports Git LFS, but you need to explicitly pull files during build
- The `git lfs pull` command downloads actual image files from LFS storage
- Build time may increase slightly due to downloading images (~114 MB)

## 🔍 Troubleshooting

**If images still don't appear:**
1. Check Vercel build logs for Git LFS errors
2. Verify Git LFS is installed: Check build logs for "git-lfs: command not found"
3. Try adding to Build Command: `apt-get update && apt-get install -y git-lfs && git lfs pull`
4. Check that images exist in GitHub (not just pointers)

## Alternative: Use External Image Hosting

If Git LFS continues to be problematic:
- Upload images to Cloudinary, Imgur, or AWS S3
- Update image paths in code to use CDN URLs
- This is more reliable for production deployments

