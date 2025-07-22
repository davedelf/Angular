import { Component, Input } from '@angular/core';

import { type NuevaTareaInfo } from '../tarea/tarea.model';
import { TareasService } from './tareas.service';

@Component({
  selector: 'app-tareas',
  standalone: false,

  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class TareasComponent {
  @Input({ required: true }) idUsuario!: string;
  @Input({ required: true }) nombre!: string;
  estaAgregandoTareaNueva = false;

  private tareasService: TareasService;

  constructor(_tareasService: TareasService) {
    this.tareasService = _tareasService;
  }

  /* Atajo para la inyección de dependencias (funciona igual al tradicional de arriba):

    constructor(private tareasService:TareasService){

    }

    añadimos el modificador private al frente del parámetro, entocnes Ángular creará una propiedad con ese mismo
    nombre y realizará la inyección del servicio.
  
  */

  get tareasUsuarioSeleccionado() {
    return this.tareasService.obtenerTareasDeUsuario(this.idUsuario);
  }


  alIniciarNuevaTarea() {
    this.estaAgregandoTareaNueva = true;
  }

  alCerrarTareaNueva() {
    this.estaAgregandoTareaNueva = false;
  }


}
