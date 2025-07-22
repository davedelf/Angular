import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core';

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
  imports: [BrowserModule, CompartidaModule, TareasModule],
  providers: [{ provider: LOCALE_ID, useValue: 'es' }],
  /* imports:[] para componentes standalone:true, aunque también para otros módulos - ej.: BrowserModule - */
})
export class AppModule {}
/* Cuando trabajamos con módulos no es necesario colocar el pipe o dependencia en tarea - DatePipe - de manera
explicita en los imports (ya que los eliminamos al ser standalone:false).

BrowserModule ya importa los pipes necesarios, como en este caso el DatePipe. Ojo, solo tiene scope o puede
ser utilizado en el componente raiz, que en este caso es app. En otros componentes o modulos
usamos para acceder al datepipe y componentes de formulario ng FormsModule y CommonModule.
Tener en cuenta el orden jerarquico o ramas del proyecto para saber qué imports son necesarios cuando trabajamos
con estructuras basadas en módulos.

imports: [BrowserModule, ]*/
