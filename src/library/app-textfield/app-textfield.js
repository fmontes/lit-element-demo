// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
class AppTextField extends LitElement {
    static get properties() {
        return {
            type: { type: String },
            placeholder: { type: String },
            value: { type: String }
        };
    }

    static get styles() {
        return css`
            input {
                border-radius: var(--radius);
                border: 0;
                box-shadow: inset 0px 0px 0px 2px var(--color-primary);
                color: var(--color-text);
                font-family: var(--font-family);
                font-size: var(--font-size);
                padding: var(--space);
                transition: box-shadow var(--transition-speed);
            }

            input:hover {
                box-shadow: inset 0px 0px 0px 2px var(--color-secondary);
            }
        `;
    }

    constructor() {
        super();
        this.type = 'text';
        this.placeholder = '';
    }

    handleInput({ target: { value } }) {
        this.value = value;
        this.dispatchEvent(new Event('change'));
    }

    render() {
        return html`
            <!-- template content -->
            <input type=${this.type} @input="${this.handleInput}" .placeholder=${this.placeholder} />
        `;
    }
}
// Register the new element with the browser.
customElements.define('app-textfield', AppTextField);
