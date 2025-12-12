import { Routes } from '@angular/router';

import { LoginComponent } from './login/login';
import { LoginOrganisateurComponent } from './login-organisateur/login-organisateur';
import { HomepageComponent } from './homepage/homepage';
import { OrganisateurpageComponent } from './organisateurpage/organisateurpage';
import { MesEvenementsComponent } from './mes-evenements/mes-evenements';
import { EventpageComponent } from './eventpage/eventpage';
import { FooterComponent } from './footer/footer';
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Authentification
  { path: 'login', component: LoginComponent },
  { path: 'login-organisateur', component: LoginOrganisateurComponent },

  // Pages générales
  { path: 'home', component: HomepageComponent },
  { path: 'events', component: EventpageComponent },  // <--- page des événements

  // Espace organisateur
  { path: 'organisateur', component: OrganisateurpageComponent },
  { path: 'mes-evenements', component: MesEvenementsComponent },
  {path : 'footer', component : FooterComponent},
];
