import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule, MenuModule, MenubarModule],
  exports: [ButtonModule, MenuModule, MenubarModule],
})
export class PrimeNgModule {}
