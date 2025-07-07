import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from "./encabezado/encabezado.component";
import { Usuario } from "./usuario/usuario";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EncabezadoComponent, Usuario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = '01-proyecto-inicial';
}
