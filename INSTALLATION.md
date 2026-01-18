# Installation Guide

Choose your preferred installation method.

## Method 1: HACS (Recommended)

### From Custom Repository:

1. **Open HACS** in Home Assistant sidebar
2. Click **⋯** (three dots) → **Custom repositories**
3. Paste: `https://github.com/yourusername/timeline-calendar`
4. Select category: **Lovelace**
5. Click **Create**
6. Search for "Timeline Calendar"
7. Click **Install**
8. **Restart Home Assistant**

### Add to Dashboard:

```yaml
type: custom:timeline-calendar
calendars:
  - calendar.my_calendar
  - calendar.work_calendar
```

## Method 2: Manual Installation

### 1. Build the card:
```bash
git clone https://github.com/yourusername/timeline-calendar
cd timeline-calendar
npm install
npm run build
```

### 2. Copy to Home Assistant:
```bash
cp dist/timeline-calendar-card.js /path/to/homeassistant/config/www/
```

### 3. Add resource to dashboard:

In your dashboard YAML:
```yaml
resources:
  - url: /local/timeline-calendar-card.js
    type: module
```

Or via UI:
- Settings → Dashboards → Resources
- Create new resource
- URL: `/local/timeline-calendar-card.js`
- Resource type: `JavaScript Module`

### 4. Add card to dashboard:

```yaml
type: custom:timeline-calendar
calendars:
  - calendar.my_calendar
```

## Configuration

### Basic:
```yaml
type: custom:timeline-calendar
calendars:
  - calendar.my_calendar
```

### Full Example:
```yaml
type: custom:timeline-calendar
title: "My Timeline Calendar"
calendars:
  - calendar.family
  - calendar.work
  - calendar.birthdays
```

## Configuration Options

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `calendars` | `string[]` | Yes | - | List of calendar entity IDs to display |
| `title` | `string` | No | - | Card title |

## Requirements

- Home Assistant 2024.1.0 or later
- At least one caldav calendar configured (`calendar.*` entity)

## Verify Installation

1. Open your dashboard
2. Look for the "Timeline Calendar" card
3. Should show a 24-hour timeline with events (or demo events initially)
4. Check browser console (F12) for any errors

## Troubleshooting

### Card shows blank or errors:
- Check browser console (F12) for JavaScript errors
- Verify calendar entities exist in HA
- Try refreshing the page (Ctrl+Shift+R)

### Events not showing:
- Ensure calendar has events configured
- Check calendar entity is available: Developer Tools → States
- Verify entity name in card config

### HACS can't find repository:
- Ensure GitHub repo is **public**
- Check repository URL is correct
- Try again in a few minutes (GitHub caching)

## Updates

### Via HACS:
- HACS will automatically detect updates
- Click "Update" when available
- Restart Home Assistant

### Manual:
1. Re-run `npm run build`
2. Copy new `dist/timeline-calendar-card.js` to `/www/`
3. Restart Home Assistant or do a hard refresh (Ctrl+Shift+R)

## Support

For issues or questions:
- GitHub Issues: https://github.com/yourusername/timeline-calendar/issues
- Discussions: https://github.com/yourusername/timeline-calendar/discussions
