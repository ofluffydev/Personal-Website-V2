@echo off

:: Stage all changes
git add .

:: Prompt for commit message
set /p commit_message=Enter commit message:

:: Commit with the provided message
git commit -m "%commit_message%"

:: Push changes
git push

echo Changes pushed successfully!
pause