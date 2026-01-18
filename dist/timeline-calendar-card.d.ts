import { LitElement } from 'lit';
import { HomeAssistant, TimelineCalendarConfig } from './types';
import './timeline-component';
export declare class TimelineCalendarCard extends LitElement {
    hass?: HomeAssistant;
    config?: TimelineCalendarConfig;
    private events;
    static styles: import("lit").CSSResult;
    setConfig(config: TimelineCalendarConfig): void;
    updated(changedProperties: Map<string, any>): void;
    private loadEvents;
    getCardSize(): number;
    getGridOptions(): {
        columns: number;
        min_columns: number;
    };
    render(): import("lit-html").TemplateResult<1>;
}
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
declare global {
    interface HTMLElementTagNameMap {
        'timeline-calendar-card': TimelineCalendarCard;
    }
}
