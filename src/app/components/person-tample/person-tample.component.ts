import { Component } from '@angular/core';

@Component({
  selector: 'app-person-tample',
  standalone: true,
  imports: [],
  templateUrl: './person-tample.component.html',
  styleUrl: './person-tample.component.css'
})
export class PersonTampleComponent {
  person = {
    givenName: 'Maria',
    surName: 'Temponera',
    age: 34,
    email: 'chtemp@aueb.gr'
  }
}
