import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'carrera',
    loadComponent: () => import('./Paginas/carrera/carrera.page').then( m => m.CarreraPage)
  },
];
