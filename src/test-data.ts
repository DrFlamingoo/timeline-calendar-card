import { CalendarEvent } from './types';

/**
 * Generate dummy calendar events for testing
 * Creates a single day of events starting at 2 AM
 */
export function generateDummyEvents(date: Date): CalendarEvent[] {
  const events: CalendarEvent[] = [];
  const dayStart = new Date(date);
  dayStart.setHours(2, 0, 0, 0);

  // Event 1: Morning standup (2:00-2:30)
  events.push({
    id: 'event-1',
    title: 'Morning Standup',
    start: new Date(dayStart.getTime()),
    end: new Date(dayStart.getTime() + 30 * 60 * 1000),
    calendar: 'work',
    color: '#3b82f6',
  });

  // Event 2: Team meeting (2:15-3:15) - overlaps with event 1
  events.push({
    id: 'event-2',
    title: 'Team Meeting',
    start: new Date(dayStart.getTime() + 15 * 60 * 1000),
    end: new Date(dayStart.getTime() + 75 * 60 * 1000),
    calendar: 'work',
    color: '#8b5cf6',
  });

  // Event 3: Lunch (12:00-13:00)
  events.push({
    id: 'event-3',
    title: 'Lunch',
    start: new Date(dayStart.getTime() + 10 * 60 * 60 * 1000),
    end: new Date(dayStart.getTime() + 11 * 60 * 60 * 1000),
    calendar: 'personal',
    color: '#ec4899',
  });

  // Event 4: Project work (13:00-15:30)
  events.push({
    id: 'event-4',
    title: 'Project Work',
    start: new Date(dayStart.getTime() + 11 * 60 * 60 * 1000),
    end: new Date(dayStart.getTime() + 13.5 * 60 * 60 * 1000),
    calendar: 'work',
    color: '#3b82f6',
  });

  // Event 5: Dentist (14:00-14:30) - overlaps with event 4
  events.push({
    id: 'event-5',
    title: 'Dentist',
    start: new Date(dayStart.getTime() + 12 * 60 * 60 * 1000),
    end: new Date(dayStart.getTime() + 12.5 * 60 * 60 * 1000),
    calendar: 'personal',
    color: '#ec4899',
  });

  // Event 6: Gym (17:00-18:00)
  events.push({
    id: 'event-6',
    title: 'Gym',
    start: new Date(dayStart.getTime() + 15 * 60 * 60 * 1000),
    end: new Date(dayStart.getTime() + 16 * 60 * 60 * 1000),
    calendar: 'personal',
    color: '#10b981',
  });

  return events;
}
