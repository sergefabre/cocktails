import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cocktail } from '../shared/interfaces/cocktail.interface';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { ColorDirective } from 'src/core/directives/color.directive';
import { CocktailService } from '../shared/services/cocktail.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-coktail-container',
  templateUrl: './coktail-container.component.html',
  styleUrls: ['./coktail-container.component.scss'],
  standalone: true,
  imports: [CocktailListComponent, CocktailDetailsComponent, ColorDirective],
})
export class CoktailContainerComponent implements OnInit, OnDestroy {
  public selectedCocktail?: Cocktail;
  public cocktails: Cocktail[] = [];
  public subscription: Subscription = new Subscription();
  constructor(private cocktailService: CocktailService) {}

  public ngOnInit(): void {
    this.subscription.add(
      this.cocktailService.cocktails$.subscribe(
        (cocktails) => (this.cocktails = cocktails)
      )
    );
    this.subscription.add(
      this.cocktailService.selectedCocktail$.subscribe(
        (cocktail) => (this.selectedCocktail = cocktail)
      )
    );
    this.selectedCocktail = this.cocktails.at(0);
  }

  public selectCocktail(ind: number) {
    this.cocktailService.selectCocktail(ind);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
