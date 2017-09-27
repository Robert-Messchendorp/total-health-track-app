import { Routes } from '@angular/router';

import { ThtRegisterComponent } from './tht-register/tht-register.component';
import { ThtLoginComponent } from './tht-login/tht-login.component';

export const authentication_routes: Routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    { path: 'register', component: ThtRegisterComponent },
    { path: 'login', component: ThtLoginComponent }    
];
