import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  //i18n select
  public name: string = 'Silvia';
  public gender: 'male' | 'female' = 'female';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.gender = 'male';
    this.name = 'Mario';
  }

  //i18nPlural posiciones 0 1 y 2 tienen un valor
  //pero a partir de ahí añade el numnmero con #
  public clients: string[] = [
    'Maria',
    'Pedro',
    'Juan',
    'Sofia',
    'Camila',
    'Lucia',
    'Luis',
    'Fernando',
    'Lorena',
  ];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    other: 'tenemos # clientes esperando',
  };
  deleteClient(): string[] {
    const client = this.clients.shift();
    return this.clients;
  }

  //key value Pipe
  public person = {
    name: 'Silvia',
    age: 25,
    address: 'Talbot court, London',
  };

  //async pipe
  public myObservabeTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap', value))
  );

  public myPromise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise resolved');
    }, 3500);
  });
}
