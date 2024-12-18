import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RouterModule } from '@angular/router';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';

@Component({
  selector: 'app-principal',
  imports: [HeaderComponent, SearchBarComponent, MatSidenav, MatSidenavContainer, MatSidenavContent, MatSidenavContent, RouterModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

}
