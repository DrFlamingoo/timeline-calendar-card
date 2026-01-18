# HACS Repository Structure

This repository is structured for HACS compatibility. Here's what gets distributed to users:

## Files Distributed to Users

When users install via HACS, they receive:
```
config/www/community/timeline-calendar/
├── timeline-calendar-card.js     ✅ Main card file (from dist/)
├── timeline-calendar-card.js.map ✅ Source map (from dist/)
└── README.md                      ✅ Documentation
```

## Repository Structure (What Stays in GitHub)

```
timeline-calendar/
├── dist/                          ✅ MUST be in git (compiled files)
│   ├── timeline-calendar-card.js
│   ├── timeline-calendar-card.js.map
│   └── *.d.ts (TypeScript definitions)
│
├── src/                           ❌ Source only (developers)
│   ├── timeline-calendar-card.ts
│   ├── timeline-component.ts
│   ├── layout.ts
│   ├── utils.ts
│   ├── types.ts
│   ├── test-data.ts
│   └── __tests__/
│
├── .github/                       ❌ Workflows only (developers)
│   └── workflows/
│
├── Configuration Files
│   ├── hacs.json                  ✅ HACS manifest
│   ├── package.json               ❌ Development only
│   ├── tsconfig.json              ❌ Development only
│   ├── webpack.config.js          ❌ Development only
│   └── jest.config.js             ❌ Development only
│
├── Documentation
│   ├── README.md                  ✅ Shown to users
│   ├── ARCHITECTURE.md            ✅ Available to users
│   └── *.md (other docs)          ✅ Reference
│
└── node_modules/                  ❌ Explicitly ignored
```

## Key HACS Configuration

### hacs.json
```json
{
  "name": "Timeline Calendar Card",
  "content_in_root": true,
  "filename": "timeline-calendar-card.js",
  "domains": ["calendar"],
  "homeassistant": "2024.1.0"
}
```

### .gitignore
- ✅ DO COMMIT: `dist/`
- ❌ DO NOT COMMIT: `node_modules/`, `.env`, `coverage/`

## Build Process

```bash
# 1. Developers run build
npm run build

# 2. Creates dist/timeline-calendar-card.js (single bundled file)

# 3. Commit and push
git add dist/
git commit -m "Build: update distribution"
git push

# 4. HACS detects the file and offers it for installation
```

## Installation Flow

1. User adds custom repository to HACS
2. HACS fetches hacs.json and reads: `"filename": "timeline-calendar-card.js"`
3. HACS downloads dist/timeline-calendar-card.js
4. File is installed to: config/www/community/timeline-calendar/
5. User adds resource: `/local/community/timeline-calendar/timeline-calendar-card.js`

## HACS Compliance Checklist

- [x] `hacs.json` present in repository root
- [x] `content_in_root: true` - files at root level
- [x] `filename` specified - points to bundled .js file
- [x] `README.md` in root
- [x] Single compiled `.js` file in dist/
- [x] All other source files optional (developers only)
- [x] No node_modules in repository

## Troubleshooting HACS Issues

**"Repository structure for master is not compliant"**
- Check `hacs.json` has `"content_in_root": true` ✓
- Check `"filename": "timeline-calendar-card.js"` exists in dist/ ✓
- Ensure dist/timeline-calendar-card.js is committed to git ✓

**"File not found"**
- Run `npm run build` ✓
- Check dist/timeline-calendar-card.js exists ✓
- Commit and push: `git add dist/ && git commit && git push` ✓

**No updates showing in HACS**
- Create a git tag: `git tag v0.2.0 && git push origin v0.2.0`
- Update package.json version
- HACS checks for new versions via git tags
