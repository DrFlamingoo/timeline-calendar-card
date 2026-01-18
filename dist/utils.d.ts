/**
 * Generate a CSS gradient for time of day
 * 2 AM (start) -> darker
 * 6 AM -> sunrise
 * 9 AM - 5 PM -> day
 * 6 PM -> sunset
 * 9 PM -> dark
 * 2 AM -> dark
 */
export declare function generateTimeGradient(dayStart: Date): string;
/**
 * Format time as HH:MM in 24-hour format
 */
export declare function formatTime(date: Date): string;
/**
 * Calculate duration in hours
 */
export declare function getDurationHours(start: Date, end: Date): number;
