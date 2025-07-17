import { Component, EventEmitter, Output,signal,Signal} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nueva-tarea',
  imports: [FormsModule], //FormsModule para importar las directivas y enlaces para trabajar con formularios y entradas de los inputs. Vinculacióón bidireccional
  templateUrl: './nueva-tarea.html',
  styleUrl: './nueva-tarea.css',
})
export class NuevaTarea {
  @Output() cancelar = new EventEmitter<void>();
  tituloIngresado = signal('');
  resumenIngresado= signal('');
  fechaIngresada= signal('');
  alCancelar() {
    this.cancelar.emit();
  }
}
