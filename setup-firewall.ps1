# Document Editor - Firewall Setup Script
# Run this as Administrator to allow phone access

Write-Host "Setting up Windows Firewall rules for Document Editor..." -ForegroundColor Cyan

try {
    # Allow Frontend (Port 5175)
    New-NetFirewallRule -DisplayName "Document Editor Frontend" `
        -Direction Inbound `
        -LocalPort 5175 `
        -Protocol TCP `
        -Action Allow `
        -Profile Private,Public `
        -ErrorAction Stop
    
    Write-Host "✓ Frontend port 5175 allowed" -ForegroundColor Green
    
    # Allow Backend (Port 4000)
    New-NetFirewallRule -DisplayName "Document Editor Backend" `
        -Direction Inbound `
        -LocalPort 4000 `
        -Protocol TCP `
        -Action Allow `
        -Profile Private,Public `
        -ErrorAction Stop
    
    Write-Host "✓ Backend port 4000 allowed" -ForegroundColor Green
    Write-Host ""
    Write-Host "Firewall configuration complete!" -ForegroundColor Green
    Write-Host "You can now access the app from your phone at:" -ForegroundColor Yellow
    Write-Host "http://192.168.10.39:5175" -ForegroundColor Cyan
    
} catch {
    Write-Host "Error: $_" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please run this script as Administrator" -ForegroundColor Yellow
    Write-Host "Right-click PowerShell and select 'Run as Administrator'" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
