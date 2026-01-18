# Quick HACS Setup - Step by Step

## The Fast Version (5 minutes)

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `timeline-calendar`
3. Description: `Horizontal timeline calendar card for Home Assistant`
4. Select **PUBLIC** (important!)
5. Do NOT initialize with README (we have one)
6. Click **Create repository**

### Step 2: Push Your Code to GitHub

```bash
# Navigate to your project folder
cd /home/dmjk/Projects/Homelab/__homeassistant/timeline-calendar

# Set your GitHub username (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/timeline-calendar.git
git branch -M main
git push -u origin main
```

### Step 3: Create First Release

```bash
# Tag the version
git tag v0.1.0
git push origin v0.1.0
```

This triggers GitHub Actions to:
- Run tests automatically
- Build the dist folder
- Create a GitHub Release

### Step 4: Install in Home Assistant via HACS

1. Open **Home Assistant**
2. Go to **HACS** (sidebar)
3. Click **⋯** (three dots menu)
4. Select **Custom repositories**
5. Paste: `https://github.com/YOUR_USERNAME/timeline-calendar`
6. Choose category: **Lovelace**
7. Click **Create**
8. Find **"Timeline Calendar Card"** and click it
9. Click **Install**
10. **Restart Home Assistant** (Settings → System → Restart)

### Step 5: Add to Dashboard

In your Lovelace dashboard YAML:

```yaml
type: custom:timeline-calendar
calendars:
  - calendar.my_calendar
```

Or use the UI editor:
- Create new card
- Search for "Timeline Calendar"
- Select it
- Add calendar entity from dropdown

---

## What You Just Set Up

✅ **GitHub Actions CI/CD:**
- Tests run automatically on every push
- Release automatically created on tag
- No manual building needed

✅ **HACS Distribution:**
- One-click install for all your HA instances
- Automatic update notifications
- Easy version management

✅ **Self-Hosted Repo:**
- You control all the code
- Can be private (HACS still works)
- No waiting for official HACS review

---

## For Future Updates

Whenever you want to release a new version:

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Commit: `git add . && git commit -m "Version X.X.X: Description"`
4. Tag: `git tag vX.X.X`
5. Push: `git push origin main && git push origin vX.X.X`

That's it! GitHub Actions handles the rest, and HACS automatically detects the new version.

---

## Verification

After Step 10, check:

1. **Dashboard loads?**
   - Go to your dashboard
   - Card should appear with a 24-hour timeline
   - Should show demo events

2. **No errors?**
   - Open browser console (F12)
   - Check for red errors (warnings are OK)

3. **Can edit?**
   - Click three dots on card
   - Should see edit option
   - Can select calendars

---

## Need Help?

- **Can't push to GitHub?** Make sure you authenticated: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
- **Tests failing?** Run `npm test` locally first
- **Card not showing?** Hard refresh dashboard (Ctrl+Shift+R)
- **Need docs?** Check `INSTALLATION.md` and `HACS_SETUP.md`

---

## Files Reference

| File | Purpose |
|------|---------|
| `hacs.json` | HACS manifest (tells HACS about the card) |
| `.github/workflows/test.yml` | Auto-run tests on every push |
| `.github/workflows/release.yml` | Auto-create releases on tags |
| `CHANGELOG.md` | Version history |
| `INSTALLATION.md` | User installation guide |
| `HACS_SETUP.md` | Detailed HACS setup guide |

All set! 🎉
