import { calculateMasonryLayout, getMaxColumns } from '../layout';
import { generateDummyEvents } from '../test-data';

describe('Masonry Layout', () => {
  let testDate: Date;

  beforeEach(() => {
    testDate = new Date('2026-01-18T00:00:00Z');
  });

  it('should calculate layout for events', () => {
    const events = generateDummyEvents(testDate);
    const dayStart = new Date(testDate);
    dayStart.setHours(2, 0, 0, 0);

    const layouts = calculateMasonryLayout(events, dayStart);
    expect(layouts.length).toBe(events.length);
  });

  it('should assign all events to valid columns', () => {
    const events = generateDummyEvents(testDate);
    const dayStart = new Date(testDate);
    dayStart.setHours(2, 0, 0, 0);

    const layouts = calculateMasonryLayout(events, dayStart);

    for (const layout of layouts) {
      expect(layout.column).toBeGreaterThanOrEqual(0);
      expect(layout.startPercent).toBeGreaterThanOrEqual(0);
      expect(layout.widthPercent).toBeGreaterThan(0);
    }
  });

  it('should position events as percentages within 0-100', () => {
    const events = generateDummyEvents(testDate);
    const dayStart = new Date(testDate);
    dayStart.setHours(2, 0, 0, 0);

    const layouts = calculateMasonryLayout(events, dayStart);

    for (const layout of layouts) {
      expect(layout.startPercent).toBeGreaterThanOrEqual(0);
      expect(layout.startPercent + layout.widthPercent).toBeLessThanOrEqual(101); // Allow slight rounding error
    }
  });

  it('should assign different columns to overlapping events', () => {
    const events = generateDummyEvents(testDate);
    const dayStart = new Date(testDate);
    dayStart.setHours(2, 0, 0, 0);

    const layouts = calculateMasonryLayout(events, dayStart);

    // Find overlapping events
    for (let i = 0; i < layouts.length; i++) {
      for (let j = i + 1; j < layouts.length; j++) {
        const l1 = layouts[i];
        const l2 = layouts[j];

        // Check if events overlap in time
        const e1End = l1.startPercent + l1.widthPercent;
        const e2End = l2.startPercent + l2.widthPercent;
        const overlap = !(e1End <= l2.startPercent || l1.startPercent >= e2End);

        if (overlap) {
          // Overlapping events should have different columns
          expect(l1.column).not.toBe(l2.column);
        }
      }
    }
  });

  it('should calculate correct max columns', () => {
    const events = generateDummyEvents(testDate);
    const dayStart = new Date(testDate);
    dayStart.setHours(2, 0, 0, 0);

    const layouts = calculateMasonryLayout(events, dayStart);
    const maxColumns = getMaxColumns(layouts);

    expect(maxColumns).toBeGreaterThan(0);
    expect(maxColumns).toBeLessThanOrEqual(layouts.length);
  });
});
