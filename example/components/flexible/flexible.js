var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
let Flexible = class Flexible extends LitElement {
    constructor() {
        super(...arguments);
        this.flex = '1';
    }
    static get styles() {
        return css `
      #flexible {
      }
        `;
    }
    render() {
        return html `
        <div id="flexible" style="
flex: ${this.flex};
">
            <slot></slot>
        </div>
        `;
    }
};
__decorate([
    property()
], Flexible.prototype, "flex", void 0);
Flexible = __decorate([
    customElement('x-flexible')
], Flexible);
export { Flexible };
//# sourceMappingURL=flexible.js.map