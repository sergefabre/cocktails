import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cocktail } from '../interfaces/cocktail.interface';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  public cocktails$: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    {
      name: 'Mojito',
      img: 'https://static.750g.com/images/1200-630/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg',
      description: `The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed to dicing to unlock oils that will assist with enhancing the minty flavour.`,
      ingredients: [
        { name: 'citron', quantity: 2 },
        { name: 'rhum', quantity: 3 },
        { name: 'menthe', quantity: 3 },
      ],
    },
    {
      name: 'Paloma',
      img: 'https://static.750g.com/images/622-auto/ae9942c032cdd359017ab6914c58a664/cocktail-paloma-tequila.jpg',
      description: `Ultra rafraîchissant, ce cocktail préparé avec du jus de pamplemousse, de la tequila, de l'eau gazeuse et du citron vert va en étonner plus d'un lors au prochain apéritif.`,
      ingredients: [
        { name: 'rhum', quantity: 2 },
        { name: 'eau', quantity: 1 },
        { name: 'citron', quantity: 5 },
      ],
    },
    {
      name: 'Spritz à la fleur de sureau',
      img: 'https://static.750g.com/images/622-auto/b934d42f8d61b3d094771f4ac7905801/adobestock-157289918.jpeg',
      description: `Cette recette de spritz à la fleur de sureau est légèrement amer, parfait pour ceux qui trouvent le spritz à l'aperol trop sucré à leur goût.`,
      ingredients: [
        { name: 'rhum', quantity: 2 },
        { name: 'café', quantity: 5 },
      ],
    },
  ]);
  // public selectedCocktail$: BehaviorSubject<Cocktail> = new BehaviorSubject(
  //   this.cocktails$.value[0]
  // );

  // constructor() {}
  // public selectCocktail(ind: number) {
  //   this.selectedCocktail$.next(this.cocktails$.value.at(ind)!);
  // }
  public getCocktail(index: number) {
    const cocktails = this.cocktails$.value;
    return cocktails[index];
  }
}
