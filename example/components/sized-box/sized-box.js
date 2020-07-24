var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
let SizedBox = class SizedBox extends LitElement {
    constructor() {
        super(...arguments);
        this.width = 'auto';
        this.height = 'auto';
    }
    static get styles() {
        return css `
      #sized-box {
      }
        `;
    }
    render() {
        return html `
        <div id="sized-box" style="
width: ${this.width};
height: ${this.height};
">
            <slot></slot>
        </div>
        `;
    }
};
__decorate([
    property()
], SizedBox.prototype, "width", void 0);
__decorate([
    property()
], SizedBox.prototype, "height", void 0);
SizedBox = __decorate([
    customElement('x-sized-box')
], SizedBox);
export { SizedBox };
//# sourceMappingURL=sized-box.js.map