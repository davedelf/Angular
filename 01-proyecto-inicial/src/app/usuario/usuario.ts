import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})

//Añadimos cuerpo a la clase del componente
export class Usuario {
  @Input({required:true}) avatar!: string;
  @Input({required:true}) nombre!:string;

  get rutaImagen(){
    return this.avatar;
  }

  alSeleccionarUsuario() {}
}
