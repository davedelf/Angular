import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { EncabezadoComponent } from './app/encabezado/encabezado.component';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
