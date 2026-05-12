@echo off
setlocal EnableDelayedExpansion
cd /d "%~dp0"
if not exist node_modules (
  echo Dependencies are missing. Run npm install first.
  pause
  exit /b 1
)

set "SITE_URL=http://localhost:4173/"
set "CHECK_CMD=try { $r = Invoke-WebRequest -Uri '%SITE_URL%' -UseBasicParsing -TimeoutSec 2; if ($r.StatusCode -ge 200 -and $r.StatusCode -lt 500) { exit 0 } else { exit 1 } } catch { exit 1 }"

powershell -NoLogo -NoProfile -Command "%CHECK_CMD%"
if %errorlevel%==0 (
  echo Website is already running at %SITE_URL%
  start "" "%SITE_URL%"
  exit /b 0
)

start "Portfolio Dev Server" cmd /k "cd /d %~dp0 && npm.cmd run dev"

echo Waiting for website on %SITE_URL%
for /l %%i in (1,1,30) do (
  ping -n 2 127.0.0.1 >nul
  powershell -NoLogo -NoProfile -Command "%CHECK_CMD%"
  if !errorlevel! == 0 (
    start "" "%SITE_URL%"
    exit /b 0
  )
)

echo The dev server did not become ready within 30 seconds.
echo Keep the terminal window open and check it for any Vite errors.
pause
