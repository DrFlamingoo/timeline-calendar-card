# Getting Started with Timeline Calendar Card

## Quick Start

### Install Dependencies
```bash
npm install
```

### Run Tests
```bash
npm test              # Run once
npm run test:watch    # Watch mode
```

### Build
```bash
npm run build         # Compile TypeScript to JavaScript
npm run dev          # Watch mode
```

### View Visualization
```bash
npm run build && node visualize.mjs
```

## What's Been Built

### ✅ Core Components
1. **Dummy Event Generator** - Creates 6 realistic test events with overlaps
2. **Masonry Layout Engine** - Automatically arranges overlapping events in columns
3. **Timeline Component** - Lit web component for rendering the timeline
4. **Home Assistant Card** - Wrapper for Home Assistant Lovelace integration
5. **Style System** - Day/night gradient background, responsive event boxes

### ✅ Test Coverage (15 tests)
- Dummy event generation validates date ranges, overlap detection, colors
- Layout algorithm ensures non-overlapping events are in same column
- Utilities test time formatting, duration calculation, gradient generation

### 📁 File Structure
```
src/
├── types.ts              # TypeScript interfaces
├── test-data.ts          # Event generator
├── layout.ts             # Masonry layout logic
├── utils.ts              # Helper functions
├── timeline-component.ts # Web component
├── timeline-calendar-card.ts # HA integration
└── __tests__/            # Jest test suites

dist/                      # Compiled JavaScript (ready for HA)
```

## How It Works

### 1. Event Generation
The `generateDummyEvents()` function creates:
- Morning Standup: 2:00-2:30 AM (Column 0)
- Team Meeting: 2:15-3:15 AM (Column 1 - overlaps)
- Lunch: 12:00-1:00 PM (Column 0)
- Project Work: 1:00-3:30 PM (Column 0)
- Dentist: 2:00-2:30 PM (Column 1 - overlaps)
- Gym: 5:00-6:00 PM (Column 0)

### 2. Layout Calculation
`calculateMasonryLayout()` processes events:
- Sorts events by start time
- Finds column for each event (skipping occupied slots)
- Calculates position and width as percentages (0-100%)
- Returns array of `EventLayout` objects

### 3. UI Rendering
`TimelineCalendar` component:
- Displays 24-hour header (2 AM - 2 AM next day)
- Renders events as overlays with dynamic width
- Shows multiple columns for overlapping events
- Applies time-aware gradient background

## Next: Connect to Real Data

To integrate with Home Assistant's caldav calendar:

1. Modify `loadEvents()` in `timeline-calendar-card.ts`
2. Query `hass.states` for calendar entities
3. Parse event data from calendar integration
4. Pass to layout engine

```typescript
private loadEvents() {
  // Replace this:
  // const today = new Date();
  // this.events = generateDummyEvents(today);
  
  // With this:
  if (!this.hass || !this.config) return;
  
  this.events = this.config.calendars
    .flatMap(calendarId => {
      const state = this.hass!.states[calendarId];
      // Parse caldav event data
      return state?.attributes?.events || [];
    });
}
```

## Build for Home Assistant

```bash
npm run build
cp dist/timeline-calendar-card.js /path/to/ha/config/www/
```

Then in your dashboard:
```yaml
resources:
  - url: /local/timeline-calendar-card.js
    type: module

views:
  - name: Calendar
    cards:
      - type: custom:timeline-calendar
        calendars:
          - calendar.my_calendar
          - calendar.work_calendar
```

## Architecture Decisions

### Why Lit?
- Official Home Assistant recommendation
- Small bundle size
- Excellent TypeScript support
- Web standards-based

### Why Masonry Layout?
- Prevents event overlap
- Each row can have multiple "columns"
- Automatically handles any number of overlaps
- Pure calculation logic (testable, fast)

### Why TDD?
- Core logic has comprehensive tests
- Confidence in layout algorithm correctness
- Easy to refactor without breaking features
- Tests serve as documentation

## Troubleshooting

**Tests failing?**
```bash
npm install
npm test
```

**Build errors?**
```bash
npm run build -- --noEmit  # Check for errors
```

**Want to see the visualization?**
```bash
npm run build
node visualize.mjs
```

## Files Reference

| File | Purpose |
|------|---------|
| `types.ts` | TypeScript types for events and config |
| `test-data.ts` | `generateDummyEvents()` function |
| `layout.ts` | `calculateMasonryLayout()` and related |
| `utils.ts` | Helper functions (time, gradient, etc) |
| `timeline-component.ts` | Lit component for rendering |
| `timeline-calendar-card.ts` | Home Assistant card wrapper |

## Development Commands

```bash
npm run build     # One-time TypeScript compilation
npm run dev       # Watch mode for development
npm test          # Run Jest tests
npm run test:watch # Jest watch mode
node visualize.mjs # See ASCII visualization
```
