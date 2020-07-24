import { LitElement, html, customElement, css } from 'lit-element';

@customElement('x-column')
export class Column extends LitElement {

static get styles() {
        return css`
      #column {
         display: flex;
         flex-direction: column;
         align-items: center;
      }
        `;
    }

 render() {
        return html`
        <div id="column" style="
">
            <slot></slot>
        </div>
        `;
    }

}
