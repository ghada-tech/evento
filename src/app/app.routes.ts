import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { LoginOrganisateurComponent } from './login-organisateur/login-organisateur';
import { HomepageComponent } from './homepage/homepage';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'login-organisateur', component: LoginOrganisateurComponent },
  { path: 'home', component: HomepageComponent },
];
