import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../interfaces/ingredient.interface';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  public ingredients$: BehaviorSubject<Ingredient[]>;
  constructor() {
    this.ingredients$ = new BehaviorSubject<Ingredient[]>([]);
  }

  public addToPanier(ingredients: Ingredient[]): void {
    const currentValue = this.ingredients$.value;

    // Si le panier contient déjà des ingredients...
    if (currentValue) {
      console.log(currentValue);

      // A ce stade on peut avoir plusieurs fois 'rhum' par exemple
      // const obj = [...currentValue, ...ingredients].reduce((acc, value) => {
      //   if (acc[value.name]) {
      //     acc[value.name] += value.quantity;
      //   } else {
      //     acc[value.name] = value.quantity;
      //   }
      //   return acc;
      // });
      // const result = Object.keys(obj).map((key) => ({
      //   name: key,
      //   quantity: obj[key],
      // }));
      // console.log(result);

      this.ingredients$.next([]);
    } else {
      console.log(ingredients);
      this.ingredients$.next(ingredients);
    }
  }
}
