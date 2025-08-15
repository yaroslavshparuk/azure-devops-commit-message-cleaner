#!/bin/bash

# Azure DevOps PR Title Cleaner - Build Script
# This script creates distribution packages for Chrome and Firefox

echo "🚀 Building Azure DevOps PR Title Cleaner Extension..."

# Create build directory
mkdir -p dist
cd dist

# Chrome/Edge Package (Manifest V3)
echo "📦 Creating Chrome/Edge package..."
mkdir -p chrome-edge
cp ../manifest.json chrome-edge/
cp ../content.js chrome-edge/
cp ../README.md chrome-edge/
cp ../LICENSE chrome-edge/

# Create Chrome/Edge ZIP
cd chrome-edge
zip -r ../azure-devops-pr-cleaner-chrome.zip *
cd ..

echo "✅ Chrome/Edge package created: dist/azure-devops-pr-cleaner-chrome.zip"

# Firefox Package (Manifest V2)
echo "📦 Creating Firefox package..."
mkdir -p firefox
cp ../manifest.json firefox/
cp ../content.js firefox/
cp ../README.md firefox/
cp ../LICENSE firefox/

# Create Firefox ZIP
cd firefox
zip -r ../azure-devops-pr-cleaner-firefox.zip *
cd ..

echo "✅ Firefox package created: dist/azure-devops-pr-cleaner-firefox.zip"

# Clean up temporary directories
rm -rf chrome-edge firefox

echo "🎉 Build complete! Packages are ready in the dist/ folder"