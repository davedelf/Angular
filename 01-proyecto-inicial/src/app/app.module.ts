import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app';
import { TareasComponent } from './tareas/tareas';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { UsuarioComponent } from './usuario/usuario';
import { TareaComponent } from './tarea/tarea';
import { NuevaTareaComponent } from './tareas/nueva-tarea/nueva-tarea';
import { CompartidaModule } from './compartida/compartida.module';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    UsuarioComponent,
    TareasComponent,
    TareaComponent,
    NuevaTareaComponent,
  ] /* declarations:[] para componentes standalone:false */,
  bootstrap: [AppComponent],
  imports: [BrowserModule,FormsModule,CompartidaModule],
  /* imports:[] para componentes standalone:true, aunque también para otros módulos - ej.: BrowserModule - */
})
export class AppModule {}
/* Cuando trabajamos con módulos no es necesario colocar el pipe o dependencia en tarea - DatePipe - de manera
explicita en los imports (ya que los eliminamos al ser standalone:false).

BrowserModule ya importa los pipes necesarios, como en este caso el DatePipe.

imports: [BrowserModule, ]*/
