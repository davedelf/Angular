import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { type Usuario } from './usuario.model';
import { TarjetaComponent } from "../compartida/tarjeta/tarjeta";

@Component({
  selector: 'app-usuario',
  standalone: true,
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
  imports: [TarjetaComponent],
})
export class UsuarioComponent {
  @Input({ required: true }) usuario!: Usuario;
  @Input({ required: true }) seleccionado!: boolean;
  @Output() seleccion = new EventEmitter<string>();

  get rutaImagen() {
    return this.usuario.avatar;
  }

  alSeleccionarUsuario() {
    this.seleccion.emit(this.usuario.id);
  }
}
