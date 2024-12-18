import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { PartListComponent } from './components/parts/part-list/part-list.component';


export const routes: Routes = [
    {
        path: '',
        component: PrincipalComponent,
        children: [
            { path: '', component: PartListComponent }          
          ]},
];
