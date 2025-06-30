@echo off
echo ================================
echo   Cosmic Portfolio Setup
echo ================================
echo.
echo Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo.
    echo ❌ Error installing dependencies!
    echo Please make sure Node.js is installed.
    pause
    exit /b %errorlevel%
)

echo.
echo ✅ Dependencies installed successfully!
echo.
echo Starting development server...
echo.
echo 🚀 Your cosmic portfolio will open at: http://localhost:3000
echo.
call npm run dev

pause