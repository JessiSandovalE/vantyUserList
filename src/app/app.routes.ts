import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'user',
    loadComponent: () => import('./components/user-list/user-list.component').then((c) => c.UserListComponent)
  },
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full'
  }


];
