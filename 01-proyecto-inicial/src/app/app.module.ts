import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { UsuarioComponent } from './usuario/usuario';
import { CompartidaModule } from './compartida/compartida.module';
import { TareasModule } from './tareas/tareas.module';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    UsuarioComponent,

  ] /* declarations:[] para componentes standalone:false */,
  bootstrap: [AppComponent],
  imports: [BrowserModule,CompartidaModule,TareasModule],
  /* imports:[] para componentes standalone:true, aunque también para otros módulos - ej.: BrowserModule - */
})
export class AppModule {}
/* Cuando trabajamos con módulos no es necesario colocar el pipe o dependencia en tarea - DatePipe - de manera
explicita en los imports (ya que los eliminamos al ser standalone:false).

BrowserModule ya importa los pipes necesarios, como en este caso el DatePipe.

imports: [BrowserModule, ]*/
