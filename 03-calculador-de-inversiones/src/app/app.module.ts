import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Encabezado } from './encabezado/encabezado.component';
import { ResultadosInversionComponent } from './resultados-inversion/resultados-inversion.component';
import { IngresoUsuarioModule } from './ingreso-usuario/ingreso-usuario.module';

@NgModule({
  declarations: [AppComponent, Encabezado, ResultadosInversionComponent],
  imports: [
    BrowserModule,
    IngresoUsuarioModule,
  ] /* Siempre importar primero BrowserModule */,
  bootstrap: [AppComponent],
})
export class AppModule {}
