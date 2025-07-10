import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})

//Añadimos cuerpo a la clase del componente
export class Usuario {
  @Input({required:true}) usuario!:{
    id:string;
    nombre:string;
    avatar:string;
  };


  @Output() seleccion = new EventEmitter<string>();

  get rutaImagen() {
    return this.usuario.avatar;
  }

  alSeleccionarUsuario() {
    this.seleccion.emit(this.usuario.id);
  }
}
