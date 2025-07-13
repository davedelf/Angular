import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { UsuarioComponent } from './usuario/usuario';
import { USUARIOS_FALSOS } from './usuarios-falsos';
import { Tareas } from './tareas/tareas';



@Component({
  selector: 'app-root',
  imports: [EncabezadoComponent, UsuarioComponent, Tareas],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
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
