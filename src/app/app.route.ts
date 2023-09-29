import { Routes } from '@angular/router';
import { CoktailContainerComponent } from './coktail-container/coktail-container.component';
import { PanierContainerComponent } from './panier-container/panier-container.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'cocktails',
    pathMatch: 'full',
  },
  {
    path: 'cocktails',
    component: CoktailContainerComponent,
  },
  {
    path: 'panier',
    component: PanierContainerComponent,
  },
];
