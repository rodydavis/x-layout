import { LitElement, html, customElement, css } from 'lit-element';

@customElement('x-wrap')
export class Wrap extends LitElement {

static get styles() {
        return css`
      #wrap {
         display: flex;
         flex-wrap: wrap;
         align-items: center;
      }
        `;
    }

 render() {
        return html`
        <div id="wrap" style="
">
            <slot></slot>
        </div>
        `;
    }

}
