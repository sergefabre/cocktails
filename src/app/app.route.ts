import { Routes } from '@angular/router';
import { CoktailContainerComponent } from './coktail-container/coktail-container.component';
import { PanierContainerComponent } from './panier-container/panier-container.component';
import { CocktailDetailsComponent } from './coktail-container/cocktail-details/cocktail-details.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'cocktails',
    pathMatch: 'full',
  },
  {
    path: 'cocktails',
    component: CoktailContainerComponent,
    children: [
      { path: ':index', component: CocktailDetailsComponent },
      { path: '', redirectTo: '0', pathMatch: 'full' },
    ],
  },
  {
    path: 'panier',
    component: PanierContainerComponent,
  },
];
