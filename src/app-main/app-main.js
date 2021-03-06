// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import '../library/app-button/app-button';
import '../library/app-textfield/app-textfield';

// Extend the LitElement base class
class AppMain extends LitElement {
    render() {
        return html`
            <!-- template content -->
            <app-button
                .data="${{
                    label: 'Hey you! click me',
                    action: e => {
                        alert('Thank you!');
                    }
                }}"
            ></app-button>
            <app-textfield type="email" placeholder="Hola Mundo"></app-textfield>
        `;
    }
}
// Register the new element with the browser.
customElements.define('app-main', AppMain);
