import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from "./encabezado/encabezado.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EncabezadoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = '01-proyecto-inicial';
}
