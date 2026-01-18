import { generateDummyEvents } from '../test-data';

describe('Dummy Event Generation', () => {
  let testDate: Date;

  beforeEach(() => {
    testDate = new Date('2026-01-18T00:00:00Z');
  });

  it('should generate dummy events for a single day', () => {
    const events = generateDummyEvents(testDate);
    expect(events.length).toBeGreaterThan(0);
  });

  it('should generate events starting at 2 AM', () => {
    const events = generateDummyEvents(testDate);
    const dayStart = new Date(testDate);
    dayStart.setHours(2, 0, 0, 0);

    const earliestEvent = events.reduce((min, e) => (e.start < min.start ? e : min));
    expect(earliestEvent.start.getTime()).toBe(dayStart.getTime());
  });

  it('should generate events with valid time ranges', () => {
    const events = generateDummyEvents(testDate);

    for (const event of events) {
      expect(event.start.getTime()).toBeLessThan(event.end.getTime());
      expect(event.id).toBeTruthy();
      expect(event.title).toBeTruthy();
      expect(event.calendar).toBeTruthy();
    }
  });

  it('should include overlapping events', () => {
    const events = generateDummyEvents(testDate);

    // Check that at least some events overlap
    let hasOverlap = false;
    for (let i = 0; i < events.length; i++) {
      for (let j = i + 1; j < events.length; j++) {
        const e1 = events[i];
        const e2 = events[j];
        // Check if events overlap
        if (!(e1.end.getTime() <= e2.start.getTime() || e1.start.getTime() >= e2.end.getTime())) {
          hasOverlap = true;
          break;
        }
      }
      if (hasOverlap) break;
    }

    expect(hasOverlap).toBe(true);
  });

  it('should assign colors to events', () => {
    const events = generateDummyEvents(testDate);

    for (const event of events) {
      expect(event.color).toBeTruthy();
      expect(event.color).toMatch(/^#[0-9a-f]{6}$/i);
    }
  });
});
