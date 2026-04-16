@echo off
echo Setting up and pushing to GitHub...

git status >nul 2>&1
if %errorlevel% neq 0 (
    echo Initializing git...
    git init
)

echo Staging changes...
git add .

echo Committing...
git commit -m "Update from local environment"

echo Setting main branch...
git branch -M main

echo Adding remote...
git remote add origin https://github.com/Dhanushverthanan/Nexum.git 2>nul
if %errorlevel% neq 0 (
    git remote set-url origin https://github.com/Dhanushverthanan/Nexum.git
)

echo Pushing code...
git push -u origin main

echo.
echo Done! Press any key to close this window.
pause
