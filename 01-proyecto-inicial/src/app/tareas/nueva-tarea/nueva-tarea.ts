import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {type NuevaTareaInfo } from '../../tarea/tarea.model';

@Component({
  selector: 'app-nueva-tarea',
  imports: [FormsModule], //FormsModule para importar las directivas y enlaces para trabajar con formularios y entradas de los inputs. Vinculacióón bidireccional
  templateUrl: './nueva-tarea.html',
  styleUrl: './nueva-tarea.css',
})
export class NuevaTarea {
  @Output() cancelar = new EventEmitter<void>();
  @Output() agregar = new EventEmitter<NuevaTareaInfo>();
  tituloIngresado = '';
  resumenIngresado = '';
  fechaIngresada = '';
  alCancelar() {
    this.cancelar.emit();
  }

  alEnviar() {
    this.agregar.emit({
      titulo: this.tituloIngresado,
      resumen: this.resumenIngresado,
      fecha: this.fechaIngresada,
    });
  }
}
