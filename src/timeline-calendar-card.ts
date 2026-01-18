import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant, TimelineCalendarConfig, CalendarEvent } from './types';
import { generateDummyEvents } from './test-data';
import './timeline-component';

@customElement('timeline-calendar-card')
export class TimelineCalendarCard extends LitElement {
  @property({ attribute: false })
  hass?: HomeAssistant;

  @property({ attribute: false })
  config?: TimelineCalendarConfig;

  private events: CalendarEvent[] = [];

  static styles = css`
    :host {
      display: block;
    }

    ha-card {
      overflow: hidden;
    }

    .card-content {
      padding: 16px;
    }
  `;

  setConfig(config: TimelineCalendarConfig) {
    if (!config.calendars || config.calendars.length === 0) {
      throw new Error('You need to define at least one calendar');
    }
    this.config = config;
  }

  updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    if (changedProperties.has('hass') && this.hass && this.config) {
      this.loadEvents();
    }
  }

  private loadEvents() {
    // For now, use dummy events for testing
    // TODO: Load real events from caldav integration
    const today = new Date();
    this.events = generateDummyEvents(today);
  }

  getCardSize() {
    return 4;
  }

  getGridOptions() {
    return {
      columns: 12,
      min_columns: 6,
    };
  }

  render() {
    const today = new Date();
    today.setHours(2, 0, 0, 0);

    return html`
      <ha-card header="Calendar Timeline">
        <div class="card-content">
          <timeline-calendar-timeline
            .events=${this.events}
            .dayStart=${today}
          ></timeline-calendar-timeline>
        </div>
      </ha-card>
    `;
  }
}

// Register card for discovery
declare global {
  interface Window {
    customCards?: Array<{
      type: string;
      name: string;
      description?: string;
      preview?: boolean;
      documentationURL?: string;
    }>;
  }
}

if (window.customCards === undefined) {
  window.customCards = [];
}
window.customCards.push({
  type: 'timeline-calendar',
  name: 'Timeline Calendar',
  description: 'Horizontal timeline calendar for caldav events',
  preview: false,
  documentationURL: 'https://github.com/dmjk/timeline-calendar-card',
});

declare global {
  interface HTMLElementTagNameMap {
    'timeline-calendar-card': TimelineCalendarCard;
  }
}
