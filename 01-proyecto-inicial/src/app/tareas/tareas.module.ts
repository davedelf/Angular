import { NgModule } from '@angular/core';
import { TareaComponent } from '../tarea/tarea';
import { TareasComponent } from './tareas';
import { NuevaTareaComponent } from './nueva-tarea/nueva-tarea';
import { CompartidaModule } from '../compartida/compartida.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TareaComponent, TareasComponent, NuevaTareaComponent],
  exports: [TareasComponent],
  imports: [CommonModule, FormsModule, CompartidaModule],
})
export class TareasModule {}
