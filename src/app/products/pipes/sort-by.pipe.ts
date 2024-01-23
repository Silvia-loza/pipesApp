import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(heros: Hero[], sortBy: keyof Hero | ''): Hero[] {
    switch (sortBy) {
      case 'name':
        return heros.sort((a, b) => (a.name > b.name ? 1 : -1));
        break;
      case 'canfly':
        return heros.sort((a, b) => (a.canfly > b.canfly ? 1 : -1));
      case 'color':
        return heros.sort((a, b) => (a.color > b.color ? 1 : -1));
      default:
        return heros;
    }
  }
}
