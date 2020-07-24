import { LitElement, html, customElement, css } from 'lit-element';

@customElement('x-row')
export class Row extends LitElement {

static get styles() {
        return css`
      #row {
         display: flex;
         flex-direction: row;
         align-items: center;
      }
        `;
    }

 render() {
        return html`
        <div id="row" style="
">
            <slot></slot>
        </div>
        `;
    }

}
