@echo off
REM CPPS School Website - Start Both Frontend and Backend Servers
REM This script starts both the React frontend and Node.js backend

echo.
echo ========================================
echo   CPPS School Website - Full Stack
echo ========================================
echo.

REM Check if MongoDB is running
echo Checking MongoDB connection...
mongosh --eval "db.adminCommand('ping')" >nul 2>&1
if errorlevel 1 (
    echo.
    echo WARNING: MongoDB is not running!
    echo Please start MongoDB first:
    echo   - Windows: mongod
    echo   - Or start MongoDB service from Services
    echo.
    pause
)

echo.
echo Starting Backend Server (Port 5000)...
start cmd /k "cd d:\School\CPPS\School\backend && npm run dev"

echo Waiting 3 seconds...
timeout /t 3 /nobreak

echo.
echo Starting Frontend Server (Port 3000)...
start cmd /k "cd d:\School\CPPS\School\frontend && npm start"

echo.
echo ========================================
echo   Both Servers Started!
echo ========================================
echo.
echo Frontend:  http://localhost:3000
echo Backend:   http://localhost:5000
echo API Health: http://localhost:5000/api/health
echo.
echo Press Ctrl+C in each terminal to stop
echo.
pause

