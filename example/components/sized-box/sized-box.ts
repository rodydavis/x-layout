import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('x-sized-box')
export class SizedBox extends LitElement {

@property()
width = 'auto';

@property()
height = 'auto';

static get styles() {
        return css`
      #sized-box {
      }
        `;
    }

 render() {
        return html`
        <div id="sized-box" style="
width: ${this.width};
height: ${this.height};
">
            <slot></slot>
        </div>
        `;
    }

}
