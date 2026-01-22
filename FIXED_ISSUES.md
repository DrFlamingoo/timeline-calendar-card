# Timeline Calendar Card - Issues Fixed

## Critical Issue: ReferenceError - lit is not defined ✅ FIXED

### The Problem

**Error Message:**
```
ReferenceError: lit is not defined
lit (/timeline-calendar-card/external var "lit":1:37)
/hacsfiles/timeline-calendar-card/timeline-calendar-card.js:161:428
```

### Root Cause

The webpack configuration had:
```javascript
externals: {
  lit: 'lit',
}
```

This told webpack: "Don't bundle the `lit` library - assume it will be globally available at runtime."

However, Home Assistant does NOT provide `lit` globally, so when the card tried to use Lit components, it failed with `ReferenceError: lit is not defined`.

### Solution Applied

**Changed webpack.config.js:**
```javascript
// BEFORE (BROKEN):
externals: {
  lit: 'lit',  // ← Prevented bundling
}

// AFTER (FIXED):
// Removed externals entirely - now lit is bundled
```

### Result

- **Before:** 15.2 KiB (lit NOT included)
- **After:** 23.2 KiB (lit BUNDLED)

The 8 KiB increase is the bundled `lit@3.1.0` library that is now properly included.

---

## Configuration Issue: Strict Calendar Requirement ✅ FIXED

### The Problem

The card threw an error if `calendars` was not provided:
```
Error: You need to define at least one calendar
```

This prevented the card from loading even in demo mode.

### Solution Applied

**Changes made:**

1. **types.ts** - Made calendars optional:
   ```typescript
   export interface TimelineCalendarConfig {
     type: string;
     calendars?: string[];  // Now optional
   }
   ```

2. **timeline-calendar-card.ts** - Made setConfig forgiving:
   ```typescript
   setConfig(config: TimelineCalendarConfig) {
     if (!config) {
       throw new Error('Card configuration is missing');
     }
     // Allow cards without calendars - will show demo mode
     if (!config.calendars) {
       console.warn('Timeline Calendar Card: No calendars configured. Showing demo mode...');
       config.calendars = [];
     }
     this.config = config;
   }
   ```

### Result

The card now works with minimal or no configuration and shows demo events by default.

---

## How to Use

### Minimal Configuration (Demo Mode)

```yaml
type: custom:timeline-calendar-card
```

Or explicitly without calendars:

```yaml
type: custom:timeline-calendar-card
calendars: []
```

**Result:** Shows dummy events from today's date (used for testing)

### With Real Calendars (Future Feature)

Once calendar entity integration is implemented:

```yaml
type: custom:timeline-calendar-card
calendars:
  - calendar.personal
  - calendar.work
  - calendar.family
```

---

## Next Steps

The card now **loads and displays** demo events. To make it production-ready:

1. ✅ Fix webpack externals - **DONE**
2. ✅ Make configuration optional - **DONE**
3. ⏳ Implement calendar entity data loading
4. ⏳ Add caldav integration support
5. ⏳ Fetch real events from Home Assistant

The core loading issue is resolved. The card should now appear in your dashboard!

---

## Verification

To verify the fixes worked:

1. **Check browser console** - Should no longer show `ReferenceError: lit is not defined`
2. **Dashboard appearance** - Card should render with demo events
3. **File size** - Verify `dist/timeline-calendar-card.js` is ~24 KiB (not 15.2 KiB)

Run:
```bash
ls -lh dist/timeline-calendar-card.js
```

Should show ~24 KiB file size.
