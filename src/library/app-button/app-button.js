// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
class AppButton extends LitElement {
    static get properties() {
        return {
            data: { type: Object }
        };
    }

    static get styles() {
        return css`
            button {
                background-color: var(--color-primary);
                border-radius: var(--radius);
                border: 0;
                color: var(--color-negative);
                cursor: pointer;
                font-family: var(--font-family);
                font-size: var(--font-size);
                padding: var(--space) var(--space-2x);
                transition: background-color var(--transition-speed);
            }

            button:hover {
                background-color: var(--color-secondary);
            }
        `;
    }

    constructor() {
        super();
        this.data = {
            label: 'Click Here',
            action: e => {
                console.log(e);
            }
        };
    }

    render() {
        return html`
            <!-- template content -->
            <button @click="${this.data.action}">
                ${this.data.label}
            </button>
        `;
    }
}
// Register the new element with the browser.
customElements.define('app-button', AppButton);
