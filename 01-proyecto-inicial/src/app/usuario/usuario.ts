import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})

//Añadimos cuerpo a la clase del componente
export class Usuario {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) nombre!: string;
  @Output() seleccion = new EventEmitter<string>();

  get rutaImagen() {
    return this.avatar;
  }

  alSeleccionarUsuario() {
    this.seleccion.emit(this.id);
  }
}
