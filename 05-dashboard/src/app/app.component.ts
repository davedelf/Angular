import { Component } from '@angular/core';
import { EncabezadoComponent } from "./encabezado/encabezado.component";
import { EstadoServidorComponent } from "./dashboard/estado-servidor/estado-servidor.component";
import { TraficoComponent } from "./dashboard/trafico/trafico.component";
import { RegistrosComponent } from "./dashboard/registros/registros.component";

@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [EncabezadoComponent, EstadoServidorComponent, TraficoComponent, RegistrosComponent],
})
export class AppComponent {


}
