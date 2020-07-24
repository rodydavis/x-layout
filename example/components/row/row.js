var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, css } from 'lit-element';
let Row = class Row extends LitElement {
    static get styles() {
        return css `
      #row {
         display: flex;
         flex-direction: row;
         align-items: center;
      }
        `;
    }
    render() {
        return html `
        <div id="row" style="
">
            <slot></slot>
        </div>
        `;
    }
};
Row = __decorate([
    customElement('x-row')
], Row);
export { Row };
//# sourceMappingURL=row.js.map