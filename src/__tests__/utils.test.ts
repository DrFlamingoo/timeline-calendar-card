import { generateTimeGradient, formatTime, getDurationHours } from '../utils';

describe('Utility Functions', () => {
  it('should generate a valid CSS gradient', () => {
    const testDate = new Date('2026-01-18T02:00:00Z');
    const gradient = generateTimeGradient(testDate);

    expect(gradient).toContain('linear-gradient');
    expect(gradient).toContain('to right');
    expect(gradient).toContain('#');
  });

  it('should format time correctly', () => {
    const date = new Date('2026-01-18T14:30:00Z');
    const formatted = formatTime(date);

    // Format varies by locale, but should have HH:MM pattern
    expect(formatted).toMatch(/\d{2}:\d{2}/);
  });

  it('should calculate duration in hours', () => {
    const start = new Date('2026-01-18T10:00:00Z');
    const end = new Date('2026-01-18T12:30:00Z');

    const duration = getDurationHours(start, end);
    expect(duration).toBeCloseTo(2.5, 5);
  });

  it('should handle zero duration', () => {
    const date = new Date('2026-01-18T10:00:00Z');
    const duration = getDurationHours(date, date);

    expect(duration).toBe(0);
  });

  it('should handle negative duration (end before start)', () => {
    const start = new Date('2026-01-18T12:00:00Z');
    const end = new Date('2026-01-18T10:00:00Z');

    const duration = getDurationHours(start, end);
    expect(duration).toBeLessThan(0);
  });
});
