# HACS Distribution Setup - Complete

Your Timeline Calendar Card is now ready for HACS installation! Here's exactly what you need to do.

## 🚀 Quick Start (5 minutes)

### 1. Create GitHub Repository
```
https://github.com/new
- Name: timeline-calendar
- Public: ✓ (IMPORTANT!)
- Skip initializing with README
```

### 2. Push Code to GitHub
```bash
cd /home/dmjk/Projects/Homelab/__homeassistant/timeline-calendar

# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/timeline-calendar.git
git branch -M main
git push -u origin main
git tag v0.1.0
git push origin v0.1.0
```

### 3. Install in Home Assistant
1. Open **HACS** → **⋯** → **Custom repositories**
2. Add: `https://github.com/YOUR_USERNAME/timeline-calendar`
3. Category: **Lovelace**
4. Find and **Install** "Timeline Calendar Card"
5. **Restart Home Assistant**

### 4. Add to Dashboard
```yaml
type: custom:timeline-calendar
calendars:
  - calendar.my_calendar
```

## 📦 What's Included

### HACS Configuration ✅
- **hacs.json** - Card manifest (tells HACS about your card)
- **GitHub Actions CI/CD** - Auto-test and auto-release on version tags
- **CHANGELOG.md** - Version history for users

### Documentation ✅
- **INSTALLATION.md** - User-facing installation guide
- **HACS_SETUP.md** - Detailed setup for custom repos
- **HACS_QUICK_START.md** - This simplified guide
- **README.md** - Project overview
- **ARCHITECTURE.md** - Technical documentation

### Automation ✅
- **.github/workflows/test.yml** - Runs tests on every push
- **.github/workflows/release.yml** - Creates releases on tag push
- **show-structure.js** - Shows repo structure

## 🔄 How It Works

### For You (Developer):
```
Make code changes
    ↓
git commit & push
    ↓
GitHub Actions runs tests automatically
    ↓
When ready to release:
  git tag vX.X.X
  git push origin vX.X.X
    ↓
GitHub Actions:
  - Builds dist/timeline-calendar-card.js
  - Runs tests
  - Creates Release on GitHub
    ↓
HACS detects new version
    ↓
Users get notification to update
```

### For Users (Home Assistant):
```
Install via HACS custom repository
    ↓
Card available in dashboard
    ↓
See update notification when new version released
    ↓
One-click update
```

## 📋 Configuration Files Explained

### hacs.json
```json
{
  "name": "Timeline Calendar Card",
  "content_in_root": false,
  "domains": ["calendar"],
  "homeassistant": "2024.1.0",
  "persistent_directory": "timeline-calendar"
}
```
- **name**: What users see in HACS
- **domains**: Relevant Home Assistant domains
- **homeassistant**: Minimum version required
- **persistent_directory**: Install location

### .github/workflows/test.yml
Runs automatically when you push:
- Installs dependencies
- Runs tests
- Builds production code
- Reports results

### .github/workflows/release.yml
Runs automatically when you push a tag (e.g., `v0.1.0`):
- Runs all tests
- Builds dist folder
- Creates GitHub Release
- Uploads artifacts

## 📚 File Checklist

```
✅ hacs.json
✅ .github/workflows/test.yml
✅ .github/workflows/release.yml
✅ CHANGELOG.md
✅ INSTALLATION.md
✅ HACS_SETUP.md
✅ HACS_QUICK_START.md
✅ README.md
✅ ARCHITECTURE.md
✅ src/ (source code)
✅ dist/ (compiled card)
✅ package.json
✅ tsconfig.json
```

## 🎯 What Users Download

When someone installs via HACS:
- ✓ `dist/timeline-calendar-card.js` (the actual card)
- ✓ `README.md` (documentation)
- ✓ `hacs.json` (metadata)
- ✗ Source code, tests, dev tools, etc.

Installation location: `config/www/community/timeline-calendar/`

## 🔑 GitHub Setup Details

### Permissions Needed
- [ ] Public repository (HACS requirement)
- [ ] GitHub Actions enabled (default for public repos)
- [ ] Ability to create tags/releases (comes with repo ownership)

### Optional: Branch Protection (for teams)
```
Settings → Branches → Add Rule
- Branch name: main
- Require pull request reviews
- Require status checks to pass
```

## 📈 Version Management

### Semantic Versioning
```
v0.1.0
 │ │ └─ Patch (bug fixes): v0.1.1
 │ └─── Minor (features): v0.2.0
 └───── Major (breaking): v1.0.0
```

### Release Process
```bash
# Update files
echo "0.2.0" > version.txt
# Update CHANGELOG.md with new features

# Commit
git add .
git commit -m "v0.2.0: Add feature X, fix bug Y"

# Tag and push
git tag v0.2.0
git push origin main
git push origin v0.2.0

# GitHub Actions handles the rest!
```

## 🐛 Troubleshooting

### GitHub doesn't let me push
```bash
# You need to authenticate. Use one of:
# 1. SSH key (recommended)
# 2. Personal access token
# 3. HTTPS with token

# Check: git remote -v
origin  https://github.com/YOUR_USERNAME/timeline-calendar.git (fetch)
origin  https://github.com/YOUR_USERNAME/timeline-calendar.git (push)
```

### Tests fail in GitHub Actions
1. Run locally: `npm test`
2. Fix any issues
3. Push again
4. Check workflow tab on GitHub for detailed logs

### HACS says "Repository not found"
1. Verify repo is PUBLIC
2. Check URL is correct
3. Wait a few minutes (GitHub API caching)
4. Try again

### Card doesn't appear in HACS
1. Ensure `hacs.json` exists
2. Check GitHub repo has releases (push a tag)
3. Restart Home Assistant

## 🎓 Learn More

- Home Assistant Lovelace: https://www.home-assistant.io/dashboards/
- HACS Documentation: https://hacs.xyz/
- Custom Card Development: https://developers.home-assistant.io/docs/frontend/custom-ui/custom-card/

## ✨ You're All Set!

The card is ready for distribution. Just:

1. **Create GitHub repo** (1 minute)
2. **Push code** (30 seconds)
3. **Create initial release tag** (30 seconds)
4. **Test HACS installation** (3 minutes)

Total time: ~5 minutes!

---

**Next step:** Follow the Quick Start above to get your GitHub repository set up.

Questions? Check:
- `HACS_SETUP.md` - Detailed setup guide
- `INSTALLATION.md` - User guide
- `.github/workflows/*.yml` - CI/CD configuration
