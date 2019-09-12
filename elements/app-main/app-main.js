// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import '../library/app-button/app-button';

// Extend the LitElement base class
class AppMain extends LitElement {
    render() {
        return html`
            <!-- template content -->
            <app-button>Click Me</app-button>
        `;
    }
}
// Register the new element with the browser.
customElements.define('app-main', AppMain);
