import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from "./encabezado/encabezado.component";
import { Usuario } from "./usuario/usuario";
import { USUARIOS_FALSOS } from './usuarios-falsos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EncabezadoComponent, Usuario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = '01-proyecto-inicial';
  usuarios=USUARIOS_FALSOS;
}
