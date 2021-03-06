
import { Routes, RouterModule } from '@angular/router';

import { PalpitesComponent } from './palpites/palpites.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';

const appRoutes: Routes = [
    {
        path: '', 
        redirectTo: 'login', 
        pathMatch: 'full'
    },

    {
        path: 'palpite', 
        component: PalpitesComponent,
        canActivate: [AuthGuardService]
    },

    {
        path: 'login', 
        component: LoginComponent
    },

    {
        path: 'registro', 
        component: RegisterComponent
    },
    
  ];

  export const AppRoutes = RouterModule.forRoot(appRoutes);