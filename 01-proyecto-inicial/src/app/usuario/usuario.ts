import { Component, EventEmitter, Input, Output, output } from '@angular/core';

//Usando un tipo de objeto utilizando interface. Puede definir solo tipos de objetos, pero no tipos de valores.
interface Usuario {
  id: string;
  avatar: string;
  nombre: string;
}

//Usando type. Puede, además de generar tipo de objetos, tipos de valores.

/* type Usuario = {
  id: string;
  avatar: string;
  nombre: string;
}; */

//Discusión: Evaluar su contexto para ver si utilzar interface o type.

@Component({
  selector: 'app-usuario',
  standalone: true,
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class UsuarioComponent {
  @Input({ required: true }) usuario!: Usuario;

  @Output() seleccion = new EventEmitter<string>();

  get rutaImagen() {
    return this.usuario.avatar;
  }

  alSeleccionarUsuario() {
    this.seleccion.emit(this.usuario.id);
  }
}
