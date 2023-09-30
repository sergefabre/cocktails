// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoktailContainerComponent } from './coktail-container/coktail-container.component';
import { PanierContainerComponent } from './panier-container/panier-container.component';
import { IngredientListComponent } from './panier-container/ingredient-list/ingredient-list.component';
import { CocktailFormComponent } from './coktail-container/cocktail-form/cocktail-form.component';

// Directives
import { ColorDirective } from 'src/core/directives/color.directive';

const COMPONENTS = [
  AppComponent,
  HeaderComponent,
  PanierContainerComponent,
  IngredientListComponent,
  CocktailFormComponent,
];
const DIRECTIVES = [ColorDirective];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    CoktailContainerComponent,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
