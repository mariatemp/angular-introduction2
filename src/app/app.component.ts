import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'Maria';

  person = {
    givenName: 'Maria',
    surName: 'Temponera',
    age: 34,
    email: 'chtemp@aueb.gr'
  }
}
