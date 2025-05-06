import { Component } from '@angular/core';
import { PersonTampleComponent } from './components/person-tample/person-tample.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'Maria';


}
