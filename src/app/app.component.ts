import { Component, Input } from '@angular/core';
import { Cocktail } from './shared/interfaces/cocktail.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cocktails';
  cocktail: Cocktail = {
    name: 'mojito',
    img: 'https://static.750g.com/images/640-420/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg',
    description: `Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, 
      est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, 
      à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche`,
    ingredients: [
      { name: 'ingMorito1', quantity: 2 },
      { name: 'ingMorito2', quantity: 3 },
      { name: 'ingMorito3', quantity: 3 },
    ],
  };
}
