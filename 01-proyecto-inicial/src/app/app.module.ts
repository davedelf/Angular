import { NgModule } from '@angular/core';
import { AppComponent } from './app';
import { TareasComponent } from './tareas/tareas';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { UsuarioComponent } from './usuario/usuario';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
  ] /* declarations:[] para componentes standalone:false */,
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    EncabezadoComponent,
    UsuarioComponent,
    TareasComponent,
  ],
  /* imports:[] para componentes standalone:true, aunque también para otros módulos - ej.: BrowserModule - */
})
export class AppModule {}
