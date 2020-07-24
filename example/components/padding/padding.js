var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
let Padding = class Padding extends LitElement {
    constructor() {
        super(...arguments);
        this.padding = '0px';
    }
    static get styles() {
        return css `
      #padding {
      }
        `;
    }
    render() {
        return html `
        <div id="padding" style="
padding: ${this.padding};
">
            <slot></slot>
        </div>
        `;
    }
};
__decorate([
    property()
], Padding.prototype, "padding", void 0);
Padding = __decorate([
    customElement('x-padding')
], Padding);
export { Padding };
//# sourceMappingURL=padding.js.map