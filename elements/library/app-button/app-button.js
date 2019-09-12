// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
class AppButton extends LitElement {
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

    render() {
        return html`
            <!-- template content -->
            <button>
                <slot></slot>
            </button>
        `;
    }
}
// Register the new element with the browser.
customElements.define('app-button', AppButton);
