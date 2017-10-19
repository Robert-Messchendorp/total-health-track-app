import { Routes, RouterModule } from '@angular/router';

import { ThtAuthenticationComponent } from './tht-app-views/tht-authentication/tht-authentication.component';
import { ThtRecipesComponent } from './tht-app-views/tht-recipes/tht-recipes.component';
import { ThtStocksAndSharesComponent  } from './tht-app-views/tht-stocks-and-shares/tht-stocks-and-shares.component';
import { ThtPlaygroundComponent } from './tht-app-views/tht-playground/tht-playground.component';

import { authentication_routes } from './tht-app-views/tht-authentication/tht-authentication.routes';

import { AuthGuardService } from '../services/authGuard.service';

// Routing
const appRoutes: Routes = [
    {
      path: '', component: ThtAuthenticationComponent, pathMatch: 'full'
    },
    {
      path: 'recipes', component: ThtRecipesComponent, canActivate: [AuthGuardService]
    },
    {
      path: 'Finance', component: ThtStocksAndSharesComponent, canActivate: [AuthGuardService]
    },
    {path: 'playground', component: ThtPlaygroundComponent}
    // {path: 'recipes/:id', component: ThtRecipesComponent}
    // {path: '**', redirectTo: 'bro-this-page-does-not-exist'}
  ]; 

  export const routing = RouterModule.forRoot(appRoutes);