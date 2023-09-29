import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cocktail } from '../shared/interfaces/cocktail.interface';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { ColorDirective } from 'src/core/directives/color.directive';
import { CocktailService } from '../shared/services/cocktail.service';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-coktail-container',
  templateUrl: './coktail-container.component.html',
  styleUrls: ['./coktail-container.component.scss'],
  standalone: true,
  imports: [
    CocktailListComponent,
    CocktailDetailsComponent,
    ColorDirective,
    RouterModule,
  ],
})
export class CoktailContainerComponent implements OnInit, OnDestroy {
  public cocktails!: Cocktail[];
  public subscription: Subscription = new Subscription();
  constructor(private cocktailService: CocktailService) {}

  public ngOnInit(): void {
    this.subscription.add(
      this.cocktailService.cocktails$.subscribe(
        (cocktails) => (this.cocktails = cocktails)
      )
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
