import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('x-margin')
export class Margin extends LitElement {

@property()
margin = '0px';

static get styles() {
        return css`
      #margin {
      }
        `;
    }

 render() {
        return html`
        <div id="margin" style="
margin: ${this.margin};
">
            <slot></slot>
        </div>
        `;
    }

}
