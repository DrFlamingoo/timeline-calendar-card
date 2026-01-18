/*! For license information please see timeline-calendar-card.js.LICENSE.txt */
(()=>{"use strict";const t=lit,e=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},i=globalThis,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}const a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,m=f.trustedTypes,g=m?m.emptyScript:"",v=f.reactiveElementPolyfillSupport,y=(t,e)=>t,w={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!c(t,e),$={attribute:!0,type:String,converter:w,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class E extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);r?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(s)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of e){const e=document.createElement("style"),r=i.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=s.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:w).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:w;this._$Em=s;const o=r.fromAttribute(e,t.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const o=this.constructor;if(!1===s&&(r=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??b)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[y("elementProperties")]=new Map,E[y("finalized")]=new Map,v?.({ReactiveElement:E}),(f.reactiveElementVersions??=[]).push("2.1.2");const S={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:b},_=(t=S,e,i)=>{const{kind:s,metadata:r}=i;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};function P(t){return(e,i)=>"object"==typeof i?_(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}var x=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let T=class extends t.LitElement{constructor(){super(...arguments),this.events=[],this.dayStart=new Date}render(){const e=function(t,e){const i=[...t].sort((t,e)=>t.start.getTime()-e.start.getTime()),s=new Date(e.getTime()+864e5).getTime()-e.getTime(),r=[],o=new Map;for(const t of i){const n=(t.start.getTime()-e.getTime())/s*100,a=(t.end.getTime()-e.getTime())/s*100-n;let c=0,l=!0;for(;l;){l=!1;for(const[e,s]of o.entries())if(s===c){const s=i.find(t=>t.id===e);if(!(t.end.getTime()<=s.start.getTime()||t.start.getTime()>=s.end.getTime())){l=!0;break}}l&&c++}o.set(t.id,c),r.push({event:t,startPercent:n,widthPercent:a,column:c})}return r}(this.events,this.dayStart),i=function(t){return 0===t.length?1:Math.max(...t.map(t=>t.column))+1}(e),s=(r=this.dayStart,new Date(r.getTime()+864e5),`linear-gradient(to right, ${[{hour:2,color:"#1f2937"},{hour:6,color:"#f97316"},{hour:9,color:"#fbbf24"},{hour:12,color:"#60a5fa"},{hour:17,color:"#fb923c"},{hour:18,color:"#f97316"},{hour:21,color:"#1f2937"},{hour:26,color:"#1f2937"}].map(t=>{const e=(t.hour-2)/24*100;return`${t.color} ${e}%`}).join(", ")})`);var r;if(0===this.events.length)return t.html`
        <div class="timeline-container" style="background: ${s}">
          <div class="timeline-content">
            <div class="empty-state">No events for today</div>
          </div>
        </div>
      `;const o=new Map;for(const t of e)o.has(t.column)||o.set(t.column,[]),o.get(t.column).push(t);return t.html`
      <div class="timeline-container" style="background: ${s}">
        <div class="timeline-content">
          <div class="timeline-header">
            ${Array.from({length:24},(e,i)=>{const s=(2+i)%24;return t.html`<div class="time-marker">${String(s).padStart(2,"0")}:00</div>`})}
          </div>

          ${Array.from({length:i},(e,i)=>{const s=o.get(i)||[];return t.html`
              <div class="events-row">
                ${s.map(e=>t.html`
                    <div
                      class="event"
                      style="
                        left: ${e.startPercent}%;
                        width: ${e.widthPercent}%;
                        --event-color: ${e.event.color};
                      "
                      title="${e.event.title}"
                    >
                      <span class="event-title">${e.event.title}</span>
                    </div>
                  `)}
              </div>
            `})}
        </div>
      </div>
    `}};T.styles=t.css`
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
  `,x([P({type:Array})],T.prototype,"events",void 0),x([P({type:Object})],T.prototype,"dayStart",void 0),T=x([e("timeline-calendar-timeline")],T);var C=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let O=class extends t.LitElement{constructor(){super(...arguments),this.events=[]}setConfig(t){if(!t.calendars||0===t.calendars.length)throw new Error("You need to define at least one calendar");this.config=t}updated(t){super.updated(t),t.has("hass")&&this.hass&&this.config&&this.loadEvents()}loadEvents(){const t=new Date;this.events=function(t){const e=[],i=new Date(t);return i.setHours(2,0,0,0),e.push({id:"event-1",title:"Morning Standup",start:new Date(i.getTime()),end:new Date(i.getTime()+18e5),calendar:"work",color:"#3b82f6"}),e.push({id:"event-2",title:"Team Meeting",start:new Date(i.getTime()+9e5),end:new Date(i.getTime()+45e5),calendar:"work",color:"#8b5cf6"}),e.push({id:"event-3",title:"Lunch",start:new Date(i.getTime()+36e6),end:new Date(i.getTime()+396e5),calendar:"personal",color:"#ec4899"}),e.push({id:"event-4",title:"Project Work",start:new Date(i.getTime()+396e5),end:new Date(i.getTime()+486e5),calendar:"work",color:"#3b82f6"}),e.push({id:"event-5",title:"Dentist",start:new Date(i.getTime()+432e5),end:new Date(i.getTime()+45e6),calendar:"personal",color:"#ec4899"}),e.push({id:"event-6",title:"Gym",start:new Date(i.getTime()+54e6),end:new Date(i.getTime()+576e5),calendar:"personal",color:"#10b981"}),e}(t)}getCardSize(){return 4}getGridOptions(){return{columns:12,min_columns:6}}render(){const e=new Date;return e.setHours(2,0,0,0),t.html`
      <ha-card header="Calendar Timeline">
        <div class="card-content">
          <timeline-calendar-timeline
            .events=${this.events}
            .dayStart=${e}
          ></timeline-calendar-timeline>
        </div>
      </ha-card>
    `}};O.styles=t.css`
    :host {
      display: block;
    }

    ha-card {
      overflow: hidden;
    }

    .card-content {
      padding: 16px;
    }
  `,C([P({attribute:!1})],O.prototype,"hass",void 0),C([P({attribute:!1})],O.prototype,"config",void 0),O=C([e("timeline-calendar-card")],O),void 0===window.customCards&&(window.customCards=[]),window.customCards.push({type:"custom:timeline-calendar-card",name:"Timeline Calendar Card",description:"Horizontal timeline calendar for caldav events",preview:!1,documentationURL:"https://github.com/dmjk/timeline-calendar-card"})})();
//# sourceMappingURL=timeline-calendar-card.js.map