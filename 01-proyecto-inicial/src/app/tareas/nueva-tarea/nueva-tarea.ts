import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';

import { type NuevaTareaInfo } from '../../tarea/tarea.model';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-nueva-tarea',
  standalone:false,

  templateUrl: './nueva-tarea.html',
  styleUrl: './nueva-tarea.css',
})
export class NuevaTareaComponent {
  @Input({ required: true }) idUsuario!: string;
  @Output() cerrar = new EventEmitter<void>();
  tituloIngresado = '';
  resumenIngresado = '';
  fechaIngresada = '';

  private tareasService = inject(TareasService); //Otra forma de inyectar el servicio

  alCancelar() {
    this.cerrar.emit();
  }

  alEnviar() {
    this.tareasService.agregarTarea(
      {
        titulo: this.tituloIngresado,
        resumen: this.resumenIngresado,
        fecha: this.fechaIngresada,
      },
      this.idUsuario
    );
        this.cerrar.emit();
  }
}
