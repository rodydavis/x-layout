var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
let Margin = class Margin extends LitElement {
    constructor() {
        super(...arguments);
        this.margin = '0px';
    }
    static get styles() {
        return css `
      #margin {
      }
        `;
    }
    render() {
        return html `
        <div id="margin" style="
margin: ${this.margin};
">
            <slot></slot>
        </div>
        `;
    }
};
__decorate([
    property()
], Margin.prototype, "margin", void 0);
Margin = __decorate([
    customElement('x-margin')
], Margin);
export { Margin };
//# sourceMappingURL=margin.js.map