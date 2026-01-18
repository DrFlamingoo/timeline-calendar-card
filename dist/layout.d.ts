import { CalendarEvent } from './types';
/**
 * Calculate the position and width of events for masonry layout
 */
export interface EventLayout {
    event: CalendarEvent;
    startPercent: number;
    widthPercent: number;
    column: number;
}
/**
 * Group events by overlapping time periods
 */
export declare function calculateMasonryLayout(events: CalendarEvent[], dayStart: Date): EventLayout[];
/**
 * Get the number of columns needed for the masonry layout
 */
export declare function getMaxColumns(layouts: EventLayout[]): number;
