import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { ReactWrapperComponent } from './react-wrapper/react-wrapper';
import { Layout } from './layout/layout';
import { Home } from './home/home';
import { roleGuard } from './role.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: Home,
      },
      {
        path: 'employees',
        loadChildren: () =>
          loadRemoteModule({
            remoteName: 'mfe-employee',
            exposedModule: './Routes',
          }).then((m) => m.routes),
        canActivate: [roleGuard('ADMIN')],
      },
      {
        path: 'react',
        component: ReactWrapperComponent,
      },
    ],
  },
];
