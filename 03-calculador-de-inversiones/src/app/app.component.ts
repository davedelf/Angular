import { Component } from '@angular/core';
import { Encabezado } from './encabezado/encabezado.component';
import { IngresoUsuario } from './ingreso-usuario/ingreso-usuario.component';

@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [Encabezado, IngresoUsuario],
})
export class AppComponent {
  alCalcularResultadosInversion(info: {
    inversionInicial: number;
    inversionAnual: number;
    rendimientoEsperado: number;
    duracion: number;
  }) {
    const { inversionInicial, inversionAnual, rendimientoEsperado, duracion } =
      info;
    const datosAnuales = [];
    let valorInversion = inversionInicial;

    for (let i = 0; i < duracion; i++) {
      const anio = i + 1;
      const interesGanadoEnAnio = valorInversion * (rendimientoEsperado / 100);
      valorInversion += interesGanadoEnAnio + inversionAnual;
      const interesTotal =
        valorInversion - inversionAnual * anio - inversionInicial;
      datosAnuales.push({
        anio: anio,
        interes: interesGanadoEnAnio,
        valorFinalAnio: valorInversion,
        inversionAnual: inversionAnual,
        interesTotal: interesTotal,
        montoTotalInvertido: inversionInicial + inversionAnual * anio,
      });
    }

    console.log(datosAnuales);
  }
}
