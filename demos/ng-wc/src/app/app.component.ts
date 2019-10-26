import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
    label: 'Show me',
    action: () => alert('Hello from Angular')
  };

  title: string;

  handleInput({ target: { value } }) {
    this.title = value;
  }
}
