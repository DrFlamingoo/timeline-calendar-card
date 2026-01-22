# Timeline Calendar Card

A horizontal timeline calendar card for Home Assistant Lovelace that displays events from caldav calendars.

## Visual Preview

```
📊 24-Hour Timeline Layout (2 AM - 2 AM)

TIME AXIS:
  2AM    4AM    6AM    8AM   10AM   12PM    2PM    4PM    6PM    8PM   10PM
   │      │      │      │      │      │      │      │      │      │      │
───┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼───

EVENTS (Masonry Layout - Overlapping events stack vertically):

Row 1: ┌──────────────────────┐                              ┌─────────────┐
       │ Morning Meeting      │                              │ Team Sync   │
       │ 6:00 - 7:30         │                              │ 17:30-18:00 │
       └──────────────────────┘                              └─────────────┘

Row 2:        ┌───────────────────────────────────────┐
              │ Project Work                          │
              │ 7:00 - 11:30                          │
              └───────────────────────────────────────┘

Row 3:                       ┌──────────────────────┐       ┌─────────────┐
                             │ Lunch Break         │       │ Standup     │
                             │ 12:00 - 13:00      │       │ 16:00-16:30 │
                             └──────────────────────┘       └─────────────┘

Row 4:                                    ┌────────────────────────────────┐
                                         │ Code Review                    │
                                         │ 14:00 - 17:00                  │
                                         └────────────────────────────────┘

BACKGROUND GRADIENT (Day/Night Cycle):
  🌙 Night    🌅 Sunrise   ☀️  Day      🌆 Sunset   🌙 Night
  (2-6 AM)   (6-9 AM)    (9 AM-5 PM)  (5-9 PM)   (9 PM-2 AM)
```

## Features

- ✅ **24-hour horizontal timeline** - Full day view from 2 AM to 2 AM next day
- ✅ **Masonry layout** - Overlapping events automatically stack in columns
- ✅ **Time-aware gradient** - Dynamic day/night background reflecting time of day
- ✅ **Demo mode** - Works immediately with dummy events, no configuration needed
- 🔄 **Multiple calendars** - Support for multiple calendar sources (coming soon)
- ✅ **Ultra-wide optimized** - Designed for large screens and displays
- ✅ **Event titles** - Clear event name display with time range
- ✅ **Responsive positioning** - Percentage-based layout for any width

## Quick Start

Add to your Lovelace dashboard:

```yaml
type: custom:timeline-calendar-card
```

That's it! The card will display demo events from today. See [INSTALLATION.md](INSTALLATION.md) for more options.
- ✅ **Hover effects** - Interactive elements with smooth animations

## Development

### Setup
```bash
npm install
```

### Build
```bash
npm run build
```

### Development with watch mode
```bash
npm run dev
```

### Testing
```bash
npm test
npm run test:watch
```

### View Visual Preview
To see a CLI preview of how the timeline will render with sample events:
```bash
node visualize.mjs
```

This runs the visualization which shows:
- Actual dummy events with real data
- Masonry layout calculation results  
- ASCII visualization of event positioning
- Column assignment for overlapping events
- Time markers (2 AM through 10 PM)

## Installation

### Method 1: Via HACS (Recommended)

1. Open HACS in Home Assistant
2. Go to Custom repositories
3. Add: `https://github.com/DrFlamingoo/ha-timeline-calendar-card`
4. Select "Lovelace" category
5. Search for "Timeline Calendar Card" and install
6. Restart Home Assistant
7. Add to dashboard:
   ```yaml
   type: custom:timeline-calendar
   calendars:
     - calendar.my_calendar
   ```

### Method 2: Manual Installation

1. Copy `dist/ha-timeline-calendar-card.js` to your Home Assistant config folder: `config/www/`
2. Add a resource to your dashboard:
   ```yaml
   resources:
     - url: /local/ha-timeline-calendar-card.js
       type: module
   ```
3. Add the card to your dashboard:
   ```yaml
   type: custom:timeline-calendar
   calendars:
     - calendar.my_calendar
   ```

### Configuration

**Required:**
- `calendars` - List of calendar entity IDs to display

**Example:**
```yaml
type: custom:timeline-calendar
calendars:
  - calendar.family
  - calendar.work
  - calendar.holidays
```

## Features

- 24-hour horizontal timeline view
- Masonry-style event layout for overlapping events
- Simple day/night background gradient
- Support for multiple caldav calendars
- Responsive to ultra-wide screens

## Visualization Script

The repository includes a Node.js script (`visualize.mjs`) that generates a live preview of the timeline with actual test data. You can run it to see how the component works:

```bash
node visualize.mjs
```

**Output includes:**
- Total event count for the test day
- Layout information (number of columns needed)
- Event list with time ranges and column assignments
- ASCII visualization showing event positioning
- Visual representation of the 24-hour timeline

**Script location:** [`visualize.mjs`](./visualize.mjs)

This visualization helps developers understand:
- How dummy events are generated and positioned
- How the masonry layout algorithm assigns columns
- How event widths are calculated based on duration
- Where overlapping events are placed
- The complete 24-hour time range from 2 AM to 2 AM

## Troubleshooting

### Card not appearing in HACS

- Make sure repository is PUBLIC on GitHub
- Wait 5-10 minutes for HACS to cache the repo
- Try removing and re-adding the custom repository

### Card not rendering

- Check browser console (F12) for JavaScript errors
- Verify calendar entities exist in Home Assistant
- Ensure calendars are properly configured in caldav integration
- Hard refresh dashboard (Ctrl+Shift+R)

### Calendar events not showing

- Currently using dummy test data - real caldav integration coming soon
- Check that `calendars` config lists valid entity IDs
- Verify entities are available in Developer Tools → States
