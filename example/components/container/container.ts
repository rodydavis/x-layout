import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('x-container')
export class Container extends LitElement {

@property()
padding = '0px';

@property()
margin = '0px';

@property()
width = 'auto';

@property()
height = 'auto';

@property()
color = '#ffffff';

static get styles() {
        return css`
      #container {
      }
        `;
    }

 render() {
        return html`
        <div id="container" style="
padding: ${this.padding};
margin: ${this.margin};
width: ${this.width};
height: ${this.height};
background-color: ${this.color};
">
            <slot></slot>
        </div>
        `;
    }

}
