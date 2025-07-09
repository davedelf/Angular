import { Component, computed, signal } from '@angular/core';
import { USUARIOS_FALSOS } from '../usuarios-falsos';

const indiceAleatorio = Math.floor(Math.random() * USUARIOS_FALSOS.length);

@Component({
  selector: 'app-usuario',
  standalone: true,
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})

//Añadimos cuerpo a la clase del componente
export class Usuario {
  usuarioSeleccionado = signal(USUARIOS_FALSOS[indiceAleatorio]);
/*   rutaImagen = computed(()=>'/assets/usuarios/'+this.usuarioSeleccionado().avatar) */
  rutaImagen = computed(() =>this.usuarioSeleccionado().avatar);

  /* get rutaImagen(){
    return this.usuarioSeleccionado.avatar;
  } */

  alSeleccionarUsuario() {
    const indiceAleatorio = Math.floor(Math.random() * USUARIOS_FALSOS.length);
    this.usuarioSeleccionado.set(USUARIOS_FALSOS[indiceAleatorio]);
  }
}
