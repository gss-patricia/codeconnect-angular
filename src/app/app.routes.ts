import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'users',
    component: UsersComponent,
  },
];
