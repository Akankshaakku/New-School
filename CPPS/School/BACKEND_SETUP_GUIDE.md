# 🚀 Backend Setup & Database Guide

## Overview

Your CPPS School Website has:
- **Frontend**: React (Port 3000)
- **Backend**: Node.js/Express (Port 5000)
- **Database**: MongoDB (Local or Cloud)

---

## Prerequisites

1. **Node.js** - Download from https://nodejs.org/
2. **MongoDB** - Choose one:
   - **Local**: Download from https://www.mongodb.com/try/download/community
   - **Cloud**: MongoDB Atlas (Free) - https://www.mongodb.com/cloud/atlas

---

## Step 1: Setup MongoDB

### Option A: Local MongoDB (Recommended for Development)

1. **Download & Install** MongoDB Community Edition
2. **Start MongoDB Service**:
   ```powershell
   # Windows - MongoDB runs as a service automatically
   # Or manually start:
   mongod
   ```
3. **Verify Connection**:
   ```powershell
   mongo
   # Should connect to MongoDB shell
   ```

### Option B: MongoDB Atlas (Cloud - Free)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create a cluster
4. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/cpps-school`

---

## Step 2: Setup Backend Environment

1. **Navigate to backend folder**:
   ```powershell
   cd d:\School\CPPS\School\backend
   ```

2. **Create `.env` file** (copy from `env.example`):
   ```powershell
   Copy-Item env.example .env
   ```

3. **Edit `.env` file** with your settings:
   ```
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/cpps-school
   JWT_SECRET=your-super-secret-jwt-key-here-change-this
   FRONTEND_URL=http://localhost:3000
   ```

   **For MongoDB Atlas**, use:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/cpps-school
   ```

4. **Install dependencies**:
   ```powershell
   npm install
   ```

---

## Step 3: Start Backend Server

### Development Mode (with auto-reload):
```powershell
cd d:\School\CPPS\School\backend
npm run dev
```

### Production Mode:
```powershell
npm start
```

**Expected Output**:
```
Server running on port 5000
Environment: development
MongoDB Connected: localhost
```

---

## Step 4: Start Frontend Server

**In a new terminal**:
```powershell
cd d:\School\CPPS\School\frontend
npm start
```

---

## Step 5: Verify Everything Works

1. **Frontend**: http://localhost:3000
2. **Backend API**: http://localhost:5000/api/health
3. **Should see**:
   ```json
   {
     "status": "OK",
     "message": "CPPS School API is running",
     "timestamp": "2025-10-24T..."
   }
   ```

---

## Database Structure

### Collections (Tables):

1. **Users** - Student/Staff accounts
2. **Testimonials** - Student testimonials
3. **Faculty** - Teacher information
4. **Events** - School events
5. **Contact** - Contact form submissions
6. **Gallery** - Gallery images
7. **Newsletter** - Newsletter subscriptions

---

## API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/health` | Check API status |
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/testimonials` | Get testimonials |
| POST | `/api/testimonials` | Add testimonial |
| GET | `/api/faculty` | Get faculty list |
| GET | `/api/events` | Get events |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/gallery` | Get gallery images |
| POST | `/api/newsletter` | Subscribe to newsletter |

---

## Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution**: Start MongoDB service
```powershell
mongod
```

### Port Already in Use
```powershell
# Find process using port 5000
Get-NetTCPConnection -LocalPort 5000

# Kill process
Stop-Process -Id <PID> -Force
```

### Dependencies Not Installing
```powershell
npm cache clean --force
Remove-Item -Recurse -Force node_modules
npm install
```

### CORS Error
Update `FRONTEND_URL` in `.env`:
```
FRONTEND_URL=http://localhost:3000
```

---

## Data Storage Location

### Local MongoDB
- **Windows**: `C:\Program Files\MongoDB\Server\<version>\data`
- **Data**: Stored in `cpps-school` database

### MongoDB Atlas (Cloud)
- **Data**: Stored on MongoDB servers
- **Access**: Via connection string in `.env`

---

## Quick Start Script

Create `START_BOTH.bat`:
```batch
@echo off
start cmd /k "cd d:\School\CPPS\School\backend && npm run dev"
start cmd /k "cd d:\School\CPPS\School\frontend && npm start"
echo Both servers started!
echo Frontend: http://localhost:3000
echo Backend: http://localhost:5000
pause
```

Then double-click to start both servers!

---

## Next Steps

1. ✅ Setup MongoDB
2. ✅ Configure `.env` file
3. ✅ Start backend: `npm run dev`
4. ✅ Start frontend: `npm start`
5. ✅ Test API endpoints
6. ✅ Build features!

---

**Happy coding! 🎉**

