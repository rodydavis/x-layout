var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
let Container = class Container extends LitElement {
    constructor() {
        super(...arguments);
        this.padding = '0px';
        this.margin = '0px';
        this.width = 'auto';
        this.height = 'auto';
        this.color = '#ffffff';
    }
    static get styles() {
        return css `
      #container {
      }
        `;
    }
    render() {
        return html `
        <div id="container" style="
padding: ${this.padding};
margin: ${this.margin};
width: ${this.width};
height: ${this.height};
background-color: ${this.color};
">
            <slot></slot>
        </div>
        `;
    }
};
__decorate([
    property()
], Container.prototype, "padding", void 0);
__decorate([
    property()
], Container.prototype, "margin", void 0);
__decorate([
    property()
], Container.prototype, "width", void 0);
__decorate([
    property()
], Container.prototype, "height", void 0);
__decorate([
    property()
], Container.prototype, "color", void 0);
Container = __decorate([
    customElement('x-container')
], Container);
export { Container };
//# sourceMappingURL=container.js.map