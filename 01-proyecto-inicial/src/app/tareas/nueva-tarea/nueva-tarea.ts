import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NuevaTareaInfo } from '../../tarea/tarea.model';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-nueva-tarea',
  imports: [FormsModule], //FormsModule para importar las directivas y enlaces para trabajar con formularios y entradas de los inputs. Vinculacióón bidireccional
  templateUrl: './nueva-tarea.html',
  styleUrl: './nueva-tarea.css',
})
export class NuevaTarea {
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
