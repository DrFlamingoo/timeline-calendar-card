import { LitElement } from 'lit';
import { CalendarEvent } from './types';
export declare class TimelineCalendar extends LitElement {
    events: CalendarEvent[];
    dayStart: Date;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'timeline-calendar-timeline': TimelineCalendar;
    }
}
