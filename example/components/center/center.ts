import { LitElement, html, customElement, css } from 'lit-element';

@customElement('x-center')
export class Center extends LitElement {

static get styles() {
        return css`
      #center {
         width: 100%;
         height: 100%;
         text-align: center;
         display: flex;
         align-items: center;
         justify-content: center;
         vertical-align: middle;
      }
        `;
    }

 render() {
        return html`
        <div id="center" style="
">
            <slot></slot>
        </div>
        `;
    }

}
