import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('x-flexible')
export class Flexible extends LitElement {

@property()
flex = '1';

static get styles() {
        return css`
      #flexible {
      }
        `;
    }

 render() {
        return html`
        <div id="flexible" style="
flex: ${this.flex};
">
            <slot></slot>
        </div>
        `;
    }

}
