import { platformBrowser } from "@angular/platform-browser";
import { AppModule } from "./app/app.module";

platformBrowser().bootstrapModule(AppModule)
/* import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { EncabezadoComponent } from './app/encabezado/encabezado.component';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { LOCALE_ID } from '@angular/core';

registerLocaleData(localeEs, 'es');

bootstrapApplication(App, {
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es',
    },
  ],
}).catch((err) => console.error(err));
 */
/* 
  Con registerLocaleData le permitimos a Angular que muestre valores en formato regional, como la fecha,
  moneda, valores, etc. Podemos cambiar el identificador de idioma 'es' por otro idioma que querramos.
  Esta opción es util para apps multi-idiomas.
*/
