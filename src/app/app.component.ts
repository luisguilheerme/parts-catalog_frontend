import { Component } from '@angular/core';
import { PrincipalComponent } from '../components/layout/principal/principal.component';

@Component({
  selector: 'app-root',
  imports: [PrincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'parts-catalog';
}
