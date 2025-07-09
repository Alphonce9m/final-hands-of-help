# Cleanup script for unused files

# Remove backup/new files in pages directory
Remove-Item -Path "src/pages/Donate.tsx.new" -ErrorAction SilentlyContinue
Remove-Item -Path "src/pages/Home.tsx.new" -ErrorAction SilentlyContinue

# Remove VS Code settings if not needed
Remove-Item -Path "vscode-settings.json" -ErrorAction SilentlyContinue

# Clean up dist directory (it will be regenerated on next build)
if (Test-Path "dist") {
    Remove-Item -Recurse -Force "dist"
}

Write-Host "Cleanup completed. The following actions were taken:"
Write-Host "- Removed backup/new files in src/pages/"
Write-Host "- Removed vscode-settings.json"
Write-Host "- Removed dist/ directory (it will be regenerated on next build)"
Write-Host "\nAll image files and essential project files have been preserved."
