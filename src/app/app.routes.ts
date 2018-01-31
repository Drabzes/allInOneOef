import {Routes} from '@angular/router';
import {AppComponent} from './app.component';

export const appRoutes: Routes = [
  {path: 'hoi', component: AppComponent},
  {path: '', redirectTo: '/hoi', pathMatch: 'full'}
];
