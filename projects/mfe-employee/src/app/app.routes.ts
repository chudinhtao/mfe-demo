import { Routes } from '@angular/router';
import { ListComponent } from './list/list';
import { App } from './app';
import { Detail } from './detail/detail';
import { Main } from './main/main';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    children: [{ path: '', component: Main }],
  },
  { path: 'detail', component: Detail },
];
