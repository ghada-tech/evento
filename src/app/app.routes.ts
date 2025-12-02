import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { LoginOrganisateurComponent } from './login-organisateur/login-organisateur';
import { HomepageComponent } from './homepage/homepage';
import { OrganisateurpageComponent } from './organisateurpage/organisateurpage';
import { MesEvenementsComponent } from './mes-evenements/mes-evenements';
import path from 'path';




export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'login-organisateur', component: LoginOrganisateurComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'organisateur', component: OrganisateurpageComponent },
  { path: 'mes-evenements', component: MesEvenementsComponent }, // <-- ta page événements


];
