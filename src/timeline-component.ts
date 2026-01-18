import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CalendarEvent } from './types';
import { calculateMasonryLayout, getMaxColumns, EventLayout } from './layout';
import { generateTimeGradient, formatTime } from './utils';

@customElement('timeline-calendar-timeline')
export class TimelineCalendarTimeline extends LitElement {
  @property({ type: Array })
  events: CalendarEvent[] = [];

  @property({ type: Object })
  dayStart: Date = new Date();

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .timeline-container {
      position: relative;
      width: 100%;
      height: auto;
      overflow-x: auto;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .timeline-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 8px;
      z-index: 1;
    }

    .timeline-content {
      position: relative;
      z-index: 2;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .timeline-header {
      display: flex;
      gap: 2px;
      margin-bottom: 8px;
      font-size: 12px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.7);
    }

    .time-marker {
      flex: 1;
      text-align: center;
      padding: 4px;
      border-right: 1px solid rgba(255, 255, 255, 0.2);
    }

    .time-marker:last-child {
      border-right: none;
    }

    .events-row {
      display: flex;
      gap: 2px;
      min-height: 60px;
      position: relative;
    }

    .event-slot {
      flex: 1;
      position: relative;
    }

    .event {
      position: absolute;
      top: 0;
      height: 100%;
      background-color: var(--event-color, #3b82f6);
      border-radius: 4px;
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
      transition: opacity 0.2s, transform 0.2s;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
      font-weight: 500;
      color: white;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      border: 2px solid rgba(255, 255, 255, 0.3);
    }

    .event:hover {
      opacity: 0.9;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    .event-title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .empty-state {
      padding: 32px 16px;
      text-align: center;
      color: rgba(255, 255, 255, 0.6);
      font-size: 14px;
    }
  `;

  render() {
    const layouts = calculateMasonryLayout(this.events, this.dayStart);
    const maxColumns = getMaxColumns(layouts);
    const gradient = generateTimeGradient(this.dayStart);

    if (this.events.length === 0) {
      return html`
        <div class="timeline-container" style="background: ${gradient}">
          <div class="timeline-content">
            <div class="empty-state">No events for today</div>
          </div>
        </div>
      `;
    }

    // Group layouts by column
    const columnGroups = new Map<number, EventLayout[]>();
    for (const layout of layouts) {
      if (!columnGroups.has(layout.column)) {
        columnGroups.set(layout.column, []);
      }
      columnGroups.get(layout.column)!.push(layout);
    }

    return html`
      <div class="timeline-container" style="background: ${gradient}">
        <div class="timeline-content">
          <div class="timeline-header">
            ${Array.from({ length: 24 }, (_, i) => {
              const hour = (2 + i) % 24;
              return html`<div class="time-marker">${String(hour).padStart(2, '0')}:00</div>`;
            })}
          </div>

          ${Array.from({ length: maxColumns }, (_, colIndex) => {
            const columnEvents = columnGroups.get(colIndex) || [];
            return html`
              <div class="events-row">
                ${columnEvents.map(
                  (layout) => html`
                    <div
                      class="event"
                      style="
                        left: ${layout.startPercent}%;
                        width: ${layout.widthPercent}%;
                        --event-color: ${layout.event.color};
                      "
                      title="${layout.event.title}"
                    >
                      <span class="event-title">${layout.event.title}</span>
                    </div>
                  `
                )}
              </div>
            `;
          })}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'timeline-calendar-timeline': TimelineCalendarTimeline;
  }
}
