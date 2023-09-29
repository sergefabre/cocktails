import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/interfaces/cocktail.interface';
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { CommonModule } from '@angular/common';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CocktailDetailsComponent implements OnInit {
  public cocktail!: Cocktail;
  constructor(
    private cocktailService: CocktailService,
    private panierService: PanierService
  ) {}

  ngOnInit(): void {
    this.cocktailService.selectedCocktail$.subscribe(
      (cocktail) => (this.cocktail = cocktail)
    );
  }

  addToPanier() {
    this.panierService.addToPanier(this.cocktail.ingredients);
  }
}
