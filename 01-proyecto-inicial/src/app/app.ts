import { Component } from '@angular/core';
import { USUARIOS_FALSOS } from './usuarios-falsos';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  protected title = '01-proyecto-inicial';
  usuarios = USUARIOS_FALSOS;
  idUsuarioSeleccionado!: string;

  get usuarioSeleccionado() {
    return this.usuarios.find(
      (usuario) => usuario.id == this.idUsuarioSeleccionado
    )!;
  }
  alSeleccionarUsuario(id: string) {
    this.idUsuarioSeleccionado = id;
  }
}
