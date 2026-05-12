$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$npmCommand = Get-Command npm.cmd -ErrorAction SilentlyContinue
$siteUrl = "http://localhost:4173/"
$maxAttempts = 30

function Test-SiteReady {
  param (
    [string]$Url
  )

  try {
    $response = Invoke-WebRequest -Uri $Url -UseBasicParsing -TimeoutSec 2
    return $response.StatusCode -ge 200 -and $response.StatusCode -lt 500
  } catch {
    return $false
  }
}

if (-not $npmCommand) {
  Write-Host "npm was not found. Install Node.js, then try again." -ForegroundColor Red
  exit 1
}

if (-not (Test-Path (Join-Path $projectRoot "node_modules"))) {
  Write-Host "Dependencies are missing. Run 'npm install' in $projectRoot first." -ForegroundColor Yellow
  exit 1
}

if (Test-SiteReady -Url $siteUrl) {
  Write-Host "Website is already running at $siteUrl" -ForegroundColor Green
  Start-Process $siteUrl
  exit 0
}

Write-Host "Starting the portfolio site at $siteUrl" -ForegroundColor Green

Start-Process -FilePath "cmd.exe" -ArgumentList @(
  "/k",
  "cd /d `"$projectRoot`" && npm.cmd run dev"
) -WorkingDirectory $projectRoot

for ($attempt = 1; $attempt -le $maxAttempts; $attempt++) {
  Start-Sleep -Seconds 1

  if (Test-SiteReady -Url $siteUrl) {
    Start-Process $siteUrl
    Write-Host "Website is ready at $siteUrl" -ForegroundColor Green
    exit 0
  }
}

Write-Host "The dev server did not become ready within 30 seconds." -ForegroundColor Yellow
Write-Host "Keep the terminal window open and check it for any Vite errors." -ForegroundColor Yellow
