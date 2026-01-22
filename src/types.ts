/**
 * Event data structure for calendar events
 */
export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  calendar: string;
  color?: string;
}

/**
 * Configuration for the timeline calendar card
 */
export interface TimelineCalendarConfig {
  type: string;
  calendars?: string[];  // Optional - will use demo mode if not provided
}

/**
 * Home Assistant hass object (simplified typing)
 */
export interface HomeAssistant {
  states: {
    [entityId: string]: HomeAssistantEntity;
  };
  callService(domain: string, service: string, serviceData?: any): Promise<any>;
}

export interface HomeAssistantEntity {
  entity_id: string;
  state: string;
  attributes: {
    [key: string]: any;
  };
  last_changed: string;
  last_updated: string;
}
