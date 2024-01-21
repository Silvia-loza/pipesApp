import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'silvia lozano';
  items: MenuItem[] | undefined;

  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
  }
  ngOnInit(): void {
    this.items = [
      {
        label: 'New',
        icon: 'pi pi-fw pi-plus',
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash',
      },
    ];
  }
}
