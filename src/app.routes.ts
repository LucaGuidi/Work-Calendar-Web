import { Route } from '@angular/router';
import { HomeComponent } from './presentation/home/home.component';
import { SettingsComponent } from './presentation/settings/settings.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'settings', component: SettingsComponent },

  { path: '**', redirectTo: '/home' },
];
