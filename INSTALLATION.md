# Timeline Calendar Card - Installation & Configuration Guide

## Installation

### Option 1: Using HACS (Recommended)

1. Open Home Assistant
2. Go to **Settings → Devices & Services → Automations & Scenes**
3. Click **HACS** in the left sidebar
4. Click **Frontend**
5. Search for "Timeline Calendar Card"
6. Click **Install**
7. Restart Home Assistant

### Option 2: Manual Installation

1. Download `timeline-calendar-card.js` from the releases
2. Copy to `<config>/www/community/timeline-calendar-card/`
3. Add to your Lovelace configuration:

```yaml
resources:
  - type: module
    url: /local/community/timeline-calendar-card/timeline-calendar-card.js
```

4. Restart Home Assistant

---

## Lovelace Configuration

### Minimal Setup (Demo Mode - Shows Dummy Events)

Add this to your Lovelace dashboard:

```yaml
type: custom:timeline-calendar-card
```

This will display a 24-hour timeline with dummy events for testing purposes.

### Full Configuration Example

```yaml
type: custom:timeline-calendar-card
calendars:
  - calendar.personal
  - calendar.work
```

**Note:** Calendar entity support coming soon. Currently shows demo events.

---

## Features

✅ **24-Hour Timeline View** - Horizontal timeline from 2 AM to 2 AM next day
✅ **Masonry Layout** - Overlapping events automatically stack in columns  
✅ **Day/Night Gradient** - Dynamic background reflecting time of day
✅ **Demo Mode** - Works without configuration for testing
🔄 **Calendar Support** - Coming in future release

---

## Troubleshooting

### Card Not Showing?

1. **Check browser console** (F12):
   - Look for red errors
   - Should NOT see `ReferenceError: lit is not defined`

2. **Check Home Assistant logs**:
   - Go to **Settings → System → Logs**
   - Search for "timeline-calendar"

3. **Verify YAML syntax**:
   ```bash
   # Check via Home Assistant UI or terminal
   yamllint your-config.yaml
   ```

### Card Shows Error?

- Ensure you have the latest version (v0.1.0+)
- Try removing the `calendars:` line to use demo mode
- Refresh browser cache (Ctrl+Shift+R)

### Where Are the Events?

Currently, the card shows **demo/dummy events** by default. Real calendar integration is coming soon.

**Demo data includes:**
- Morning Standup (6:00-7:30 AM)
- Team Meeting (9:00 AM-12:45 PM)
- Lunch Break (12:00-1:00 PM)
- Project Work (1:00-5:00 PM)
- Dentist (7:20-8:00 PM)
- Gym (9:00-9:40 PM)

---

## Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

---

## Support

- **Documentation:** See [README.md](README.md)
- **Report Issues:** [GitHub Issues](https://github.com/dmjk/timeline-calendar-card/issues)
- **Source Code:** [GitHub Repository](https://github.com/dmjk/timeline-calendar-card)
