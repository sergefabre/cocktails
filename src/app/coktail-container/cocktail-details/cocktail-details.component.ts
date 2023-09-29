import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/interfaces/cocktail.interface';
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { CommonModule } from '@angular/common';
import { PanierService } from 'src/app/shared/services/panier.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

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
    private panierService: PanierService,
    private cocktailService: CocktailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const cocktailIndex = paramMap.get('index')!;
      this.cocktail = this.cocktailService.getCocktail(+cocktailIndex);
    });
  }

  addToPanier() {
    this.panierService.addToPanier(this.cocktail.ingredients);
  }
}
