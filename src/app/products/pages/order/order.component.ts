import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``,
})
export class OrderComponent implements OnInit {
  public isUpperCase: boolean = false;
  public sortBy: keyof Hero | '' = '';
  public heros: Hero[] = [
    {
      name: 'wolverine',
      canfly: true,
      color: Color.red,
    },
    {
      name: 'batman',
      canfly: false,
      color: Color.black,
    },
    {
      name: 'ironman',
      canfly: true,
      color: Color.red,
    },
    { name: 'superman', canfly: true, color: Color.blue },
    {
      name: 'spiderman',
      canfly: false,
      color: Color.green,
    },
    {
      name: 'flash',
      canfly: false,
      color: Color.blue,
    },
    {
      name: 'hulk',
      canfly: true,
      color: Color.red,
    },
  ];

  constructor() {}
  ngOnInit(): void {
    console.log(typeof this.heros[0].color);
  }

  toggleCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }
  sortByName(): void {
    this.sortBy = 'name';
  }

  sortByCanFly(): void {
    this.sortBy = 'canfly';
  }

  sortByColor() {
    this.sortBy = 'color';
  }
}
