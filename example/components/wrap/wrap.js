var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, css } from 'lit-element';
let Wrap = class Wrap extends LitElement {
    static get styles() {
        return css `
      #wrap {
         display: flex;
         flex-wrap: wrap;
         align-items: center;
      }
        `;
    }
    render() {
        return html `
        <div id="wrap" style="
">
            <slot></slot>
        </div>
        `;
    }
};
Wrap = __decorate([
    customElement('x-wrap')
], Wrap);
export { Wrap };
//# sourceMappingURL=wrap.js.map