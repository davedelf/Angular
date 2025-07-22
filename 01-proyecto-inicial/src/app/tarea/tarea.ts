import { Component, inject, Input } from '@angular/core';
import { Tarea } from './tarea.model';
import { TareasService } from '../tareas/tareas.service';

@Component({
  selector: 'app-tarea',
  standalone: false,
  templateUrl: './tarea.html',
  styleUrl: './tarea.css',
})
export class TareaComponent {
  @Input({ required: true }) tarea!: Tarea;

  private tareasService = inject(TareasService);

  alCompletarTarea() {
    this.tareasService.eliminarTarea(this.tarea.id);
  }
}
