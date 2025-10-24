@echo off
echo ========================================
echo    CPPS School Website - Clean Version
echo ========================================
echo.
echo Stopping any existing servers...
taskkill /f /im node.exe >nul 2>&1
timeout /t 2 /nobreak >nul

echo Starting development servers...
echo.

echo [1/2] Starting Backend Server (Port 5000)...
start "Backend Server" cmd /k "cd /d D:\School\CPPS\cpps-clean\backend && node server.js"
timeout /t 3 /nobreak >nul

echo [2/2] Starting Frontend Server (Port 3000)...
start "Frontend Server" cmd /k "cd /d D:\School\CPPS\cpps-clean\frontend && npm start"
timeout /t 3 /nobreak >nul

echo.
echo ========================================
echo   Servers are starting up...
echo ========================================
echo.
echo Backend API:  http://localhost:5000
echo Frontend App: http://localhost:3000
echo.
echo The website will open automatically in your browser.
echo Close the terminal windows to stop the servers.
echo.
echo If you see any errors, wait a few seconds for the servers to fully start.
echo.
pause