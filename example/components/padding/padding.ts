import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('x-padding')
export class Padding extends LitElement {

@property()
padding = '0px';

static get styles() {
        return css`
      #padding {
      }
        `;
    }

 render() {
        return html`
        <div id="padding" style="
padding: ${this.padding};
">
            <slot></slot>
        </div>
        `;
    }

}
