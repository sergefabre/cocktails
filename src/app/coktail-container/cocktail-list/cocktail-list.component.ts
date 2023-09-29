import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from '../../shared/interfaces/cocktail.interface';
import { CommonModule } from '@angular/common';
import { ColorDirective } from 'src/core/directives/color.directive';
import { CocktailService } from 'src/app/shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
  standalone: true,
  imports: [CommonModule, ColorDirective],
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[] = [];
  selectedCocktail: Cocktail = this.cocktailService.cocktails$.value.at(0)!;
  // @Output() private changeCocktail: EventEmitter<number> = new EventEmitter();

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktails = this.cocktailService.cocktails$.value;
  }

  selectCocktail(index: number) {
    this.cocktailService.selectCocktail(index);
    this.selectedCocktail = this.cocktailService.selectedCocktail$.value;
    console.log(this.selectedCocktail.name);
  }
}
