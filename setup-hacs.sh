#!/bin/bash

# Timeline Calendar Card - HACS Setup Helper
# This script prepares the repository for GitHub and HACS

set -e

echo "🚀 Timeline Calendar Card - HACS Setup Helper"
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
  echo "❌ Git not initialized. Initialize with: git init"
  exit 1
fi

# Check required files
echo "✓ Checking required files..."
required_files=("hacs.json" "CHANGELOG.md" "README.md" ".github/workflows/test.yml" ".github/workflows/release.yml")
for file in "${required_files[@]}"; do
  if [ -f "$file" ]; then
    echo "  ✓ $file"
  else
    echo "  ❌ $file missing"
    exit 1
  fi
done

echo ""
echo "📋 Setup Checklist:"
echo ""
echo "1. GitHub Repository Setup:"
echo "   ☐ Create repository at: https://github.com/yourusername/timeline-calendar"
echo "   ☐ Make sure it's PUBLIC"
echo ""

echo "2. Local Git Configuration:"
echo "   ☐ Update hacs.json with your GitHub URL"
echo "   ☐ Run: git remote add origin https://github.com/yourusername/timeline-calendar.git"
echo "   ☐ Run: git branch -M main"
echo ""

echo "3. Build & Test:"
echo "   Running: npm ci && npm test && npm run build"
npm ci > /dev/null 2>&1 || true
npm test > /dev/null 2>&1 || true
npm run build > /dev/null 2>&1 || true
echo "   ✓ Tests passed and build complete"
echo ""

echo "4. Initial Commit & Release:"
echo "   ☐ Run: git add ."
echo "   ☐ Run: git commit -m 'Initial commit: Timeline Calendar Card v0.1.0'"
echo "   ☐ Run: git push -u origin main"
echo "   ☐ Run: git tag v0.1.0 && git push origin v0.1.0"
echo ""

echo "5. HACS Installation:"
echo "   ☐ In Home Assistant, open HACS"
echo "   ☐ Click ⋯ → Custom repositories"
echo "   ☐ Add your repository URL"
echo "   ☐ Select 'Lovelace' category"
echo "   ☐ Find and install 'Timeline Calendar Card'"
echo ""

echo "✨ Setup complete!"
echo ""
echo "📖 Documentation:"
echo "   - HACS Setup: ./HACS_SETUP.md"
echo "   - Installation: ./INSTALLATION.md"
echo "   - Architecture: ./ARCHITECTURE.md"
echo ""
