import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Tarea } from './tarea.model';
import { Tarjeta } from "../compartida/tarjeta/tarjeta";

@Component({
  selector: 'app-tarea',
  standalone: true,
  templateUrl: './tarea.html',
  styleUrl: './tarea.css',
  imports: [Tarjeta],
})
export class TareaComponent {
  @Input({ required: true }) tarea!: Tarea;
  @Output() terminada=new EventEmitter<string>();
  @Output() agregarNueva=new EventEmitter<string>();

  alCompletarTarea(){
    this.terminada.emit(this.tarea.id);
  }

  alAgregarTareaNueva(){
    this.agregarNueva=new EventEmitter<string>();
  }
}
