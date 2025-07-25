import { Component } from '@angular/core';
import { Encabezado } from './encabezado/encabezado.component';
import { IngresoUsuario } from './ingreso-usuario/ingreso-usuario.component';
import { ResultadosInversionComponent } from './resultados-inversion/resultados-inversion.component';

@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [Encabezado, IngresoUsuario, ResultadosInversionComponent],
})
export class AppComponent {


}
