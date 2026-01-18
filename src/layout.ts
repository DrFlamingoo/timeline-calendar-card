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
export function calculateMasonryLayout(events: CalendarEvent[], dayStart: Date): EventLayout[] {
  // Sort events by start time
  const sortedEvents = [...events].sort((a, b) => a.start.getTime() - b.start.getTime());

  // Calculate the 24-hour period from dayStart
  const dayEnd = new Date(dayStart.getTime() + 24 * 60 * 60 * 1000);
  const dayDurationMs = dayEnd.getTime() - dayStart.getTime();

  const layouts: EventLayout[] = [];
  const columnAssignments = new Map<string, number>(); // eventId -> column

  // Process events in order, assigning columns based on overlaps
  for (const event of sortedEvents) {
    const startPercent = ((event.start.getTime() - dayStart.getTime()) / dayDurationMs) * 100;
    const endPercent = ((event.end.getTime() - dayStart.getTime()) / dayDurationMs) * 100;
    const widthPercent = endPercent - startPercent;

    // Find the first available column
    let column = 0;
    let columnTaken = true;

    while (columnTaken) {
      columnTaken = false;
      // Check if any event in this column overlaps with current event
      for (const [otherId, otherColumn] of columnAssignments.entries()) {
        if (otherColumn === column) {
          const otherEvent = sortedEvents.find((e) => e.id === otherId)!;
          // Check if events overlap
          if (!(event.end.getTime() <= otherEvent.start.getTime() || event.start.getTime() >= otherEvent.end.getTime())) {
            columnTaken = true;
            break;
          }
        }
      }
      if (columnTaken) {
        column++;
      }
    }

    columnAssignments.set(event.id, column);
    layouts.push({
      event,
      startPercent,
      widthPercent,
      column,
    });
  }

  return layouts;
}

/**
 * Get the number of columns needed for the masonry layout
 */
export function getMaxColumns(layouts: EventLayout[]): number {
  if (layouts.length === 0) return 1;
  return Math.max(...layouts.map((l) => l.column)) + 1;
}
