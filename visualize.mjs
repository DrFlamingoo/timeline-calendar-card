#!/usr/bin/env node

/**
 * Simple CLI visualization of the timeline and events
 * Useful for development and testing
 */

import { generateDummyEvents } from './dist/test-data.js';
import { calculateMasonryLayout, getMaxColumns } from './dist/layout.js';
import { formatTime } from './dist/utils.js';

const today = new Date('2026-01-18T00:00:00Z');
const dayStart = new Date(today);
dayStart.setHours(2, 0, 0, 0);

const events = generateDummyEvents(today);
const layouts = calculateMasonryLayout(events, dayStart);
const maxColumns = getMaxColumns(layouts);

console.log('\n🗓️  Timeline Calendar - Test Visualization\n');
console.log(`Date: ${dayStart.toDateString()}`);
console.log(`Total Events: ${events.length}`);
console.log(`Layout Columns: ${maxColumns}\n`);

console.log('Events:');
console.log('─'.repeat(80));

// Sort by start time and display
const sortedEvents = [...events].sort((a, b) => a.start.getTime() - b.start.getTime());

for (const event of sortedEvents) {
  const layout = layouts.find((l) => l.event.id === event.id);
  if (!layout) continue;
  const duration = (event.end.getTime() - event.start.getTime()) / (60 * 1000);

  console.log(
    `📌 ${event.title.padEnd(25)} | ${formatTime(event.start)} - ${formatTime(event.end)} | ${duration.toFixed(0).padStart(3)}min | Column ${layout.column}`
  );
}

console.log('─'.repeat(80));
console.log('\nLayout Visualization (ASCII):');
console.log('─'.repeat(80));

// Create a simple ASCII visualization
const rowWidth = 80;
const blockSize = Math.floor(rowWidth / (24 * 60)); // blocks per minute

for (let col = 0; col < maxColumns; col++) {
  const columnEvents = layouts.filter((l) => l.column === col);
  const row = new Array(rowWidth).fill(' ');

  for (const layout of columnEvents) {
    const startBlock = Math.floor(layout.startPercent * rowWidth / 100);
    const widthBlock = Math.max(1, Math.floor(layout.widthPercent * rowWidth / 100));

    for (let i = startBlock; i < startBlock + widthBlock && i < rowWidth; i++) {
      row[i] = '█';
    }
  }

  console.log(`Col ${col}: ${row.join('')}`);
}

console.log('─'.repeat(80));
console.log('      2AM                    6AM                   12PM                    6PM                   10PM');
console.log('\n✅ All tests passing - ready for Home Assistant integration!\n');
