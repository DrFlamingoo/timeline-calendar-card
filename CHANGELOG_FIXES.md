# ✅ Timeline Calendar Card - Issues Resolved

## Summary

The timeline-calendar-card had **two critical issues** that prevented it from loading in Home Assistant. Both have been **fixed and rebuilt**.

---

## Issue #1: `ReferenceError: lit is not defined` ✅ FIXED

### Error Message
```
ReferenceError: lit is not defined
lit (/timeline-calendar-card/external var "lit":1:37)
/hacsfiles/timeline-calendar-card/timeline-calendar-card.js:161:428
```

### Root Cause
**File:** `webpack.config.js`
```javascript
externals: {
  lit: 'lit',  // ← Prevented bundling
}
```

This configuration told webpack to NOT include the `lit` library in the bundle, expecting it to be globally available in Home Assistant. But Home Assistant doesn't provide `lit`, causing the card to crash on load.

### Fix Applied
**Changed:** `webpack.config.js` - Removed externals configuration

```diff
- externals: {
-   lit: 'lit',
- },
+ // Do NOT externalize 'lit' - it must be bundled
+ // externals: { ... }
```

### Result
- ✅ `lit` is now bundled with the card
- ✅ Bundle size increased from 15.2 KiB → 23.2 KiB (8 KiB for bundled lit)
- ✅ No more `ReferenceError: lit is not defined`

---

## Issue #2: Configuration Error - Strict Calendar Requirement ✅ FIXED

### Error Message
```
Error: You need to define at least one calendar
```

### Root Cause
**File:** `src/timeline-calendar-card.ts`
```typescript
setConfig(config: TimelineCalendarConfig) {
  if (!config.calendars || config.calendars.length === 0) {
    throw new Error('You need to define at least one calendar');
  }
  this.config = config;
}
```

The card would throw an error if the `calendars` config was missing, preventing even demo mode from working.

### Fixes Applied

**1. Made calendars optional in types:**
**File:** `src/types.ts`
```diff
export interface TimelineCalendarConfig {
  type: string;
- calendars: string[];
+ calendars?: string[];  // Now optional
}
```

**2. Made setConfig forgiving:**
**File:** `src/timeline-calendar-card.ts`
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
- ✅ Card loads without configuration
- ✅ Demo mode works out of the box
- ✅ Helpful warning in browser console if calendar config is missing
- ✅ Ready for future calendar integration

---

## Files Modified

| File | Change | Status |
|------|--------|--------|
| `webpack.config.js` | Removed `externals: { lit: 'lit' }` | ✅ Rebuilt |
| `src/types.ts` | Made `calendars` optional | ✅ Rebuilt |
| `src/timeline-calendar-card.ts` | Made `setConfig` forgiving | ✅ Rebuilt |

---

## Testing the Fix

### 1. Verify Bundle Size
```bash
ls -lh dist/timeline-calendar-card.js
# Should show ~24 KiB (was 15.2 KiB)
```

### 2. Check Browser Console
When loading the card, you should see:
- ✅ NO `ReferenceError: lit is not defined`
- ✅ Possible warning: "Timeline Calendar Card: No calendars configured. Showing demo mode..."
- ✅ Card renders with demo events

### 3. Minimal Configuration Test
Add to your Lovelace dashboard:
```yaml
type: custom:timeline-calendar-card
```

Result: Card should display a 24-hour timeline with dummy events

---

## Next Steps

### Immediate
- Rebuild Home Assistant to clear caches: Settings → System → Developer Tools → Restart
- Or hard refresh browser: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)

### For Real Calendar Data (Future Work)
1. Implement entity state reading (`hass.states`)
2. Add caldav calendar integration
3. Support calendar entity subscriptions
4. Fetch real events from Home Assistant

### Documentation
See also:
- [INSTALLATION.md](INSTALLATION.md) - Installation guide
- [FIXED_ISSUES.md](FIXED_ISSUES.md) - Detailed technical info
- [REVIEW.md](REVIEW.md) - Architecture comparison with flex-table-card

---

## Build Information

**Version:** 0.1.0
**Build Date:** January 22, 2026
**Built with:** Webpack 5, TypeScript 5.2, Lit 3.1

```
$ npm run build

asset timeline-calendar-card.js 23.2 KiB [emitted] [minimized] (name: main)
webpack 5.104.1 compiled successfully in 773 ms
```

---

## Troubleshooting

### Card still shows error?

1. **Hard refresh browser:**
   - Chrome/Edge: Ctrl+Shift+R
   - Firefox: Ctrl+Shift+Delete (open cache settings)
   - Safari: Cmd+Shift+R

2. **Clear Home Assistant cache:**
   - Go to Settings → System → Developer Tools
   - Click "Restart Home Assistant"

3. **Check browser console (F12):**
   - Look for any red errors
   - Should NOT see "lit is not defined"

### Card not appearing?

1. Verify HACS or manual installation is correct
2. Check that resources are properly configured
3. Ensure `timeline-calendar-card.js` file exists in correct location
4. Try removing any `calendars:` configuration to test demo mode

---

**Status: ✅ READY FOR TESTING**

The card should now load and display without errors!
