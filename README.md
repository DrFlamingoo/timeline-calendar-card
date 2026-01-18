# Timeline Calendar Card

A horizontal timeline calendar card for Home Assistant Lovelace that displays events from caldav calendars.

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

## Installation

1. Copy `dist/timeline-calendar-card.js` to your Home Assistant config folder: `config/www/`
2. Add a resource to your dashboard:
   ```yaml
   resources:
     - url: /local/timeline-calendar-card.js
       type: module
   ```
3. Add the card to your dashboard:
   ```yaml
   type: custom:timeline-calendar
   calendars:
     - calendar.my_calendar
   ```

## Features

- 24-hour horizontal timeline view
- Masonry-style event layout for overlapping events
- Simple day/night background gradient
- Support for multiple caldav calendars
- Responsive to ultra-wide screens
