import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``,
})
export class OrderComponent implements OnInit {
  public isUpperCase: boolean = false;
  public heros: Hero[] = [
    { name: 'superman', canfly: true, color: Color.blue },
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
    {
      name: 'spiderman',
      canfly: false,
      color: Color.green,
    },
  ];

  constructor() {}
  ngOnInit(): void {
    console.log(typeof this.heros[0].color);
  }

  toggleCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }
}
