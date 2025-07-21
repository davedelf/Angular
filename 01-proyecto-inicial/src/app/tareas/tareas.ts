import { Component, Input } from '@angular/core';
import { TareaComponent } from '../tarea/tarea';
import { NuevaTarea } from './nueva-tarea/nueva-tarea';
import { type NuevaTareaInfo } from '../tarea/tarea.model';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [TareaComponent, NuevaTarea],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas {
  @Input({ required: true }) idUsuario!: string;
  @Input({ required: true }) nombre!: string;
  estaAgregandoTareaNueva = false;


  get tareasUsuarioSeleccionado() {
    return this.tareas.filter((tarea) => tarea.idUsuario == this.idUsuario);
  }

  alCompletarTarea(id: string) {
    this.tareas = this.tareas.filter((tarea) => tarea.id !== id);
  }

  alIniciarNuevaTarea() {
    this.estaAgregandoTareaNueva = true;
  }

  alCancelarTareaNueva() {
    this.estaAgregandoTareaNueva = false;
  }

  alAgregarTarea(infoDeTarea: NuevaTareaInfo) {

    this.estaAgregandoTareaNueva = false;
  }
}
