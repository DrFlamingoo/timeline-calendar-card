# HACS Setup Guide

This guide explains how to set up the Timeline Calendar Card for installation via HACS (Home Assistant Community Store).

## Option 1: Install from Custom Repository (Easiest)

If you're using a custom/self-hosted GitHub repository:

### In Home Assistant:
1. Open **HACS** in the sidebar
2. Click the three-dot menu → **Custom repositories**
3. Paste your repository URL: `https://github.com/yourusername/timeline-calendar`
4. Select category: **Lovelace**
5. Click **Create**
6. Find "Timeline Calendar Card" in HACS
7. Click **Install**
8. Restart Home Assistant
9. Add the card to your dashboard with type: `custom:timeline-calendar`

## Option 2: Submit to Official HACS Repository

To have the card available in the official HACS store:

1. **Ensure repository requirements are met:**
   - [ ] GitHub repository created (public)
   - [ ] `hacs.json` in root directory ✅
   - [ ] `README.md` with installation instructions ✅
   - [ ] Tags/releases with semantic versioning (v0.1.0, v0.2.0, etc.)
   - [ ] GitHub Actions CI/CD for tests ✅

2. **Create initial release:**
   ```bash
   git tag v0.1.0
   git push origin v0.1.0
   ```
   This triggers the GitHub Actions workflow to create a release.

3. **Submit to HACS:**
   - Go to https://github.com/hacs/default
   - Click "New Issue"
   - Select "New Lovelace Repository"
   - Fill in the form with your repository details
   - Wait for HACS maintainers to review and merge

## GitHub Repository Setup

### Initial Setup (One-time):

```bash
# Create the repository on GitHub at:
# https://github.com/yourusername/timeline-calendar

# Initialize git (if not already done):
git init
git add .
git commit -m "Initial commit: Timeline Calendar Card v0.1.0"

# Add remote and push:
git remote add origin https://github.com/yourusername/timeline-calendar.git
git branch -M main
git push -u origin main

# Create initial release:
git tag v0.1.0
git push origin v0.1.0
```

### GitHub Settings to Configure:

1. **Go to Settings → Actions**
   - Enable GitHub Actions (should be on by default)

2. **Go to Settings → Branches → Branch protection rules**
   - (Optional) Add rule for `main` to require passing tests before merge

3. **Go to Settings → Code and automation → Dependabot**
   - Enable version updates for `package.json` (optional)

## File Structure for HACS

The repository should have this structure:

```
timeline-calendar/
├── hacs.json              # HACS manifest
├── README.md              # Main documentation
├── CHANGELOG.md           # Version history
├── HACS_SETUP.md         # This file
├── src/                   # TypeScript source
│   └── ...
├── dist/                  # Compiled JavaScript
│   └── timeline-calendar-card.js
├── package.json
├── tsconfig.json
├── .github/
│   └── workflows/
│       ├── test.yml       # Test automation
│       └── release.yml    # Release automation
└── .gitignore
```

## Making Updates & Releases

### For each update:

1. **Update version in files:**
   - `package.json`: bump `version`
   - `CHANGELOG.md`: add new version section

2. **Build and test:**
   ```bash
   npm ci
   npm test
   npm run build
   ```

3. **Commit and tag:**
   ```bash
   git add -A
   git commit -m "Version 0.2.0: Add feature X"
   git tag v0.2.0
   git push origin main
   git push origin v0.2.0
   ```

4. **GitHub Actions automatically:**
   - Runs tests
   - Creates release with artifacts
   - HACS picks up new version

## HACS Manifest Fields Explained

From `hacs.json`:

- **name**: Display name in HACS
- **content_in_root**: false = files in subdirectory, true = files at root
- **domains**: Applicable HA domains (calendar, light, etc.)
- **homeassistant**: Minimum HA version required
- **persistent_directory**: Directory name in `config/custom_components/` or for Lovelace
- **documentation**: Link to docs (GitHub README URL)
- **issues**: Link to issue tracker
- **source**: "custom" for user repos, "community" for official

## Installation Verification

After installation, the card should be available:

### Check in Home Assistant:
1. Go to **Settings → Devices & Services → Lovelace Dashboards**
2. Edit dashboard in UI mode
3. Try to add a new card
4. Search for "Timeline Calendar" - should appear in custom cards

### Or use YAML:
```yaml
type: custom:timeline-calendar
calendars:
  - calendar.my_calendar
```

## Troubleshooting

### Card not appearing in UI editor:
- Ensure `dist/timeline-calendar-card.js` is built: `npm run build`
- Check browser console for JavaScript errors
- Restart Home Assistant

### HACS can't find the repository:
- Verify repository is public
- Check `hacs.json` exists in root
- Ensure GitHub repo URL is correct

### Tests failing in CI/CD:
- Fix locally: `npm test`
- Commit fix
- Push to trigger new workflow run

## Next Steps

1. Create GitHub repository
2. Push code and create initial tag
3. Test HACS custom repository installation
4. (Optional) Submit to official HACS repository
5. Update this guide with your actual repository URL
