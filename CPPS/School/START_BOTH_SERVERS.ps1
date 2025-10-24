# CPPS School Website - Start Both Frontend and Backend Servers (PowerShell)

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   CPPS School Website - Full Stack" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if MongoDB is running
Write-Host "Checking MongoDB connection..." -ForegroundColor Yellow
try {
    $mongoTest = mongosh --eval "db.adminCommand('ping')" 2>$null
    Write-Host "✓ MongoDB is running" -ForegroundColor Green
} catch {
    Write-Host "⚠ WARNING: MongoDB is not running!" -ForegroundColor Red
    Write-Host "Please start MongoDB first:" -ForegroundColor Yellow
    Write-Host "  - Windows: mongod" -ForegroundColor Yellow
    Write-Host "  - Or start MongoDB service from Services" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Press Enter to continue anyway"
}

Write-Host ""
Write-Host "Starting Backend Server (Port 5000)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd 'd:\School\CPPS\School\backend'; npm run dev"

Write-Host "Waiting 3 seconds..." -ForegroundColor Yellow
Start-Sleep -Seconds 3

Write-Host ""
Write-Host "Starting Frontend Server (Port 3000)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd 'd:\School\CPPS\School\frontend'; npm start"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   Both Servers Started!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Frontend:  http://localhost:3000" -ForegroundColor Cyan
Write-Host "Backend:   http://localhost:5000" -ForegroundColor Cyan
Write-Host "API Health: http://localhost:5000/api/health" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C in each terminal to stop" -ForegroundColor Yellow
Write-Host ""
Read-Host "Press Enter to exit this window"

