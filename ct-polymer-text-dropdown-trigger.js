import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { mixinBehaviors } from "@polymer/polymer/lib/legacy/class.js";

import { clDefaultTemplate } from "cl-polymer-element-helpers/cl-default-template.js";
import { clDefaultStyle } from "cl-polymer-element-helpers/cl-default-style.js";

import { __decorate, query } from "cl-polymer-element-helpers/cl-helpers.js";
import { property, computed, customElement } from "@polymer/decorators";

import "@polymer/paper-ripple/paper-ripple.js";
import "@polymer/iron-icon/iron-icon.js";

import { clPolymerDropdownTrigger } from "cl-polymer-dropdown-trigger/cl-polymer-dropdown-trigger.js";

import "cl-polymer-element-helpers/ct-element-style.js";

let tooltipHostBehavior = {
    showTooltip: function (a, b) {}
};

let ctPolymerTextDropdownTriggerTemplate;
let ctPolymerTextDropdownTriggerTemplateDefault;
let ctPolymerTextDropdownTriggerBase = mixinBehaviors([tooltipHostBehavior], PolymerElement);
export class ctPolymerTextDropdownTrigger extends ctPolymerTextDropdownTriggerBase {
    constructor () {
        super();
        this.text = "";
        this.placeholder = "";
        this.dark = false;
        this.disabled = false;
        this.compact = false;
        this.underline = false;
        this.borderless = false;
        this.isError = false;
        this.leftJustify = false;
        this.showIconOnHover = false;
        this.openHelpTooltipInPlace = false;
    }

  	focus () {
        this.trigger.focus()
    }

    maybeShowTruncationTooltip ( event ) {
        this.renderData.text && this.showTooltip( event, {
            alignment: "start",
            tooltipText: this.renderData.text,
            truncatedElement: this.triggerText,
            type: "truncation"
        })
    }

    get renderData () {
        let label = this.label,
        isText = !!this.text;
        return {
            label,
            text: isText ? this.text : this.placeholder,
            containerCssClass: (isText ? "" : "use-placeholder") + (label ? " has-label" : "")
        };
    }

  	static get template() {
    	if ( void 0 === ctPolymerTextDropdownTriggerTemplate || null === ctPolymerTextDropdownTriggerTemplate ) {
            
            let template = document.createElement("template");
            template.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                } 

                .dropdown-trigger-text {
                    font-family: var(--cl-primary-font-family);
                    font-weight: 400;
                    -webkit-font-smoothing: var(--cl-primary-font-smoothing);
                    font-size: 15px;
                    line-height: 24px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    color: var(--cl-polymer-dropdown-trigger-text-color,var(--cl-primary-text-color));
                    padding-top: var(--cl-polymer-dropdown-trigger-text-padding-top, 11px);
                } 

                :host([button-style]) .dropdown-trigger-text {
                    font-family: var(--cl-primary-font-family);
                    font-weight: 500;
                    -webkit-font-smoothing: var(--cl-primary-font-smoothing);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    text-transform: uppercase;
                    letter-spacing: 0.01em;
                    font-size: 14px;
                    line-height: 20px;
                    padding-left: 12px;
                    padding-top: 15px;
                } 

                .use-placeholder .dropdown-trigger-text {
                    color: var(--cl-polymer-dropdown-trigger-placeholder-color,var(--cl-secondary-text-color));
                } 

                .has-label .dropdown-trigger-text {
                    padding-top: 0;
                } 

                :host([compact]) .dropdown-trigger-text {
                    font-family: var(--cl-primary-font-family);
                    font-weight: 400;
                    -webkit-font-smoothing: var(--cl-primary-font-smoothing);
                    font-size: 13px;
                    line-height: 20px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    padding-top: 10px;
                } 

                :host([dark]) .dropdown-trigger-text,
                :host([dark]) .use-placeholder .dropdown-trigger-text {
                    color: var(--ct-polymer-text-dropdown-trigger-color-dark,var(--cl-primary-text-color-inverse));
                } 

                :host([disabled]) .dropdown-trigger-text,
                :host([disabled]) .use-placeholder .dropdown-trigger-text {
                    color: var(--cl-text-disabled);
                } 

                :host([disabled][dark]) .dropdown-trigger-text,
                :host([disabled][dark]) .use-placeholder .dropdown-trigger-text {
                    color: var(--cl-text-disabled-inverse);
                }
            </style>
            <cl-polymer-dropdown-trigger 
                class$="[[renderData.containerCssClass]]"
                aria-label$="[[menuAriaLabel]]"
                borderless="[[borderless]]"
                compact="[[compact]]"
                dark="[[dark]]"
                disabled="[[disabled]]"
                explanatory-text="[[explanatoryText]]"
                help-context="[[helpContext]]"
                help-tooltip="[[helpTooltip]]"
                icon="[[icon]]"
                is-error="[[isError]]"
                label="[[renderData.label]]"
                left-icon="[[leftIcon]]"
                left-justify="[[leftJustify]]"
                marker-color="[[markerColor]]"
                open-help-tooltip-in-place="[[openHelpTooltipInPlace]]"
                show-icon-on-hover="[[showIconOnHover]]"
                underline="[[underline]]" on-focus="maybeShowTruncationTooltip"
                on-mouseenter="maybeShowTruncationTooltip"
                >
                    <span class="dropdown-trigger-text">[[renderData.text]]</span>
                    <slot name="help-tooltip" slot="help-tooltip"></slot>
            </cl-polymer-dropdown-trigger>
            `;
            template.content.insertBefore(clDefaultStyle().content.cloneNode(true), template.content.firstChild);
            let templateContent = template.content;
            let templateInsertBefore = templateContent.insertBefore;
            let defaultTemplate;
            if (void 0 === ctPolymerTextDropdownTriggerTemplateDefault || null === ctPolymerTextDropdownTriggerTemplateDefault) {
                defaultTemplate = clDefaultTemplate();
                ctPolymerTextDropdownTriggerTemplateDefault = defaultTemplate
            }
            defaultTemplate = ctPolymerTextDropdownTriggerTemplateDefault;
            templateInsertBefore.call(templateContent, defaultTemplate.content.cloneNode(true), template.content.firstChild);

            return ctPolymerTextDropdownTriggerTemplate = template;
        }

        return ctPolymerTextDropdownTriggerTemplate;
  	}
}

__decorate(
    [
        property({ type: clPolymerDropdownTrigger }),
        query("cl-polymer-dropdown-trigger")
    ], 
    ctPolymerTextDropdownTrigger.prototype, 
    "trigger", 
    void 0
);

__decorate(
    [
        property({ type: HTMLSpanElement }),
        query(".dropdown-trigger-text")
    ], 
    ctPolymerTextDropdownTrigger.prototype, 
    "triggerText", 
    void 0
);

__decorate(
    [
        property({ type: String })
    ], 
    ctPolymerTextDropdownTrigger.prototype, 
    "text", 
    void 0
);

__decorate(
    [
        property({ type: String })
    ], 
    ctPolymerTextDropdownTrigger.prototype, 
    "placeholder", 
    void 0
);

__decorate(
    [
        property({ type: String })
    ], 
    ctPolymerTextDropdownTrigger.prototype, 
    "label", 
    void 0
);

__decorate(
    [
        property({ type: String })
    ], 
    ctPolymerTextDropdownTrigger.prototype, 
    "icon", 
    void 0
);

__decorate(
    [
        property({ type: String })
    ], 
    ctPolymerTextDropdownTrigger.prototype, 
    "leftIcon", 
    void 0
);

__decorate(
    [
        property({ type: Boolean, reflectToAttribute: true })
    ], 
    ctPolymerTextDropdownTrigger.prototype, 
    "dark", 
    void 0
);

__decorate(
    [
        property({ 
            type: Boolean, 
            reflectToAttribute: true 
        })
    ], 
    ctPolymerTextDropdownTrigger.prototype, 
    "disabled", 
    void 0
);

__decorate(
    [
        property({ type: String })
    ], 
    ctPolymerTextDropdownTrigger.prototype, 
    "helpContext", 
    void 0
);

__decorate(
    [
        property({ type: Object })
    ], 
    ctPolymerTextDropdownTrigger.prototype, 
    "helpTooltip", 
    void 0
);

__decorate(
    [
        property({ type: Boolean, reflectToAttribute: true })
    ], 
    ctPolymerTextDropdownTrigger.prototype, 
    "compact", 
    void 0
);

__decorate(
    [
        property({ type: Boolean })
    ], 
    ctPolymerTextDropdownTrigger.prototype, 
    "underline", 
    void 0
);

__decorate(
    [
        property({ type: Boolean })
    ], 
    ctPolymerTextDropdownTrigger.prototype, 
    "borderless", 
    void 0
);

__decorate(
    [
        property({ type: String })
    ], 
    ctPolymerTextDropdownTrigger.prototype, 
    "explanatoryText", 
    void 0
);

__decorate(
    [
        property({ type: Boolean })
    ], 
    ctPolymerTextDropdownTrigger.prototype, 
    "isError", 
    void 0
);

__decorate(
    [
        property({ type: String })
    ], 
    ctPolymerTextDropdownTrigger.prototype, 
    "markerColor", 
    void 0
);

__decorate(
    [
        property({ type: Boolean })
    ], 
    ctPolymerTextDropdownTrigger.prototype, 
    "leftJustify", 
    void 0
);

__decorate(
    [
        property({ type: Boolean })
    ], 
    ctPolymerTextDropdownTrigger.prototype, 
    "showIconOnHover", 
    void 0
);

__decorate(
    [
        property({ type: String })
    ], 
    ctPolymerTextDropdownTrigger.prototype, 
    "menuAriaLabel", 
    void 0
);

__decorate(
    [
        property({ type: Boolean })
    ], 
    ctPolymerTextDropdownTrigger.prototype, 
    "openHelpTooltipInPlace", 
    void 0
);

__decorate(
    [
        property({ type: Object }),
        computed("text", "placeholder", "label")
    ], 
    ctPolymerTextDropdownTrigger.prototype, 
    "renderData", 
    null
);

ctPolymerTextDropdownTrigger = __decorate([
    customElement("ct-polymer-text-dropdown-trigger")
], ctPolymerTextDropdownTrigger);

export { ctPolymerTextDropdownTrigger };