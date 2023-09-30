import { Component, Input } from '@angular/core';
import { Cocktail } from '../../shared/interfaces/cocktail.interface';
import { CommonModule } from '@angular/common';
import { ColorDirective } from 'src/core/directives/color.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
  standalone: true,
  imports: [CommonModule, ColorDirective, RouterModule],
})
export class CocktailListComponent {
  @Input() public cocktails?: Cocktail[];
}
