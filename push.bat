@echo off
echo Fixing Git and removing node_modules from history...

echo 1. Clearing git cache (this removes node_modules from staging)...
git rm -r --cached . >nul 2>&1

echo 2. Re-staging files correctly (respecting new .gitignore)...
git add .

echo 3. Committing code...
git commit -m "Initial commit without node_modules"

echo 4. Setting main branch...
git branch -M main

echo 5. Pushing to GitHub...
git remote add origin https://github.com/Dhanushverthanan/Nexum.git 2>nul
if %errorlevel% neq 0 (
    git remote set-url origin https://github.com/Dhanushverthanan/Nexum.git
)
git push -u origin main -f

echo.
echo Done! Press any key to close this window.
pause
