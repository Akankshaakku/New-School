# 🚀 How to Run CPPS School Website on Local Server

## Prerequisites
- **Node.js** (v14 or higher) - Download from https://nodejs.org/
- **npm** (comes with Node.js)
- **Git** (optional, for version control)

---

## Step 1: Navigate to the Frontend Directory

Open PowerShell or Command Prompt and run:

```powershell
cd d:\School\CPPS\School\frontend
```

Or if you're in a different location:

```powershell
cd path\to\CPPS\School\frontend
```

---

## Step 2: Install Dependencies

Run this command to install all required packages:

```powershell
npm install
```

This will download and install all dependencies listed in `package.json`.

**Time:** This may take 2-5 minutes depending on your internet speed.

---

## Step 3: Start the Development Server

Run this command to start the local development server:

```powershell
npm start
```

**What happens:**
- React development server starts
- Browser automatically opens to `http://localhost:3000`
- Hot reload enabled (changes auto-refresh)

---

## Step 4: View Your Website

Your website will be available at:

**http://localhost:3000**

You should see:
- ✅ Home page with hero section
- ✅ Navigation menu
- ✅ All images loading correctly
- ✅ Facilities section
- ✅ Gallery
- ✅ About page with school building picture

---

## Available Commands

### Development Mode (with auto-reload)
```powershell
npm start
```
- Runs on `http://localhost:3000`
- Auto-refreshes when you save files
- Shows errors in browser console

### Production Build
```powershell
npm run build
```
- Creates optimized build in `build/` folder
- Minified and compressed files
- Ready for deployment

### Run Production Build Locally
```powershell
npm install -g serve
serve -s build
```
- Serves the production build
- Runs on `http://localhost:3000` (or next available port)

### Stop the Server
Press `Ctrl + C` in the terminal

---

## Troubleshooting

### Port 3000 Already in Use
If port 3000 is already in use, you can:

**Option 1:** Kill the process using port 3000
```powershell
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Option 2:** Use a different port
```powershell
$env:PORT=3001; npm start
```

### Dependencies Not Installing
```powershell
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json

# Reinstall
npm install
```

### Images Not Loading
- Check that images are in `public/image/` folder
- Verify image filenames don't have spaces
- Check browser console (F12) for 404 errors

### Port Already in Use Error
```powershell
# Find process using port 3000
Get-NetTCPConnection -LocalPort 3000

# Kill the process
Stop-Process -Id <PID> -Force
```

---

## Project Structure

```
CPPS/School/frontend/
├── public/
│   ├── image/              # All images (school building, facilities, etc.)
│   ├── index.html          # Main HTML file
│   └── favicon.ico         # Website icon
├── src/
│   ├── pages/              # Page components (Home, About, Gallery, etc.)
│   ├── components/         # Reusable components
│   ├── App.js              # Main app component
│   ├── App.css             # Main stylesheet
│   └── index.js            # Entry point
├── package.json            # Dependencies and scripts
└── build/                  # Production build (created after npm run build)
```

---

## Making Changes

1. **Edit files** in `src/` folder
2. **Save the file** (Ctrl + S)
3. **Browser auto-refreshes** with your changes
4. **Check console** (F12) for any errors

---

## Deploying to Production

After testing locally:

```powershell
# Build for production
npm run build

# Commit changes
git add .
git commit -m "Your message"

# Push to GitHub
git push origin main

# Vercel auto-deploys!
```

---

## Need Help?

- **React Docs:** https://react.dev
- **Node.js Docs:** https://nodejs.org/docs
- **npm Docs:** https://docs.npmjs.com

---

**Happy coding! 🎉**

