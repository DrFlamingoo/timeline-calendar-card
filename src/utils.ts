/**
 * Generate a CSS gradient for time of day
 * 2 AM (start) -> darker
 * 6 AM -> sunrise
 * 9 AM - 5 PM -> day
 * 6 PM -> sunset
 * 9 PM -> dark
 * 2 AM -> dark
 */
export function generateTimeGradient(dayStart: Date): string {
  const dayEnd = new Date(dayStart.getTime() + 24 * 60 * 60 * 1000);

  // Define time stops with colors
  const timeStops = [
    { hour: 2, color: '#1f2937' }, // Deep night
    { hour: 6, color: '#f97316' }, // Sunrise
    { hour: 9, color: '#fbbf24' }, // Morning
    { hour: 12, color: '#60a5fa' }, // Bright day
    { hour: 17, color: '#fb923c' }, // Afternoon
    { hour: 18, color: '#f97316' }, // Sunset
    { hour: 21, color: '#1f2937' }, // Night
    { hour: 26, color: '#1f2937' }, // Late night (2 AM next day)
  ];

  // Convert to percentages
  const gradientStops = timeStops.map((stop) => {
    const percent = ((stop.hour - 2) / 24) * 100;
    return `${stop.color} ${percent}%`;
  });

  return `linear-gradient(to right, ${gradientStops.join(', ')})`;
}

/**
 * Format time as HH:MM in 24-hour format
 */
export function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

/**
 * Calculate duration in hours
 */
export function getDurationHours(start: Date, end: Date): number {
  return (end.getTime() - start.getTime()) / (60 * 60 * 1000);
}
