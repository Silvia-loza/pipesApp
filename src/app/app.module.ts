import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
//set locales
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs);
registerLocaleData(localeFr);
registerLocaleData(localeEn);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  exports: [],
  //Sets the locale to use for the application as default
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-ES',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
