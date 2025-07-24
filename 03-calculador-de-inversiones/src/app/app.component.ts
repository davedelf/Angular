import { Component, signal } from '@angular/core';
import { Encabezado } from './encabezado/encabezado.component';
import { IngresoUsuario } from './ingreso-usuario/ingreso-usuario.component';
import { type IngresoInversion } from './ingreso-inversion.model';
import { ResultadosInversionComponent } from './resultados-inversion/resultados-inversion.component';

@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [Encabezado, IngresoUsuario, ResultadosInversionComponent],
})
export class AppComponent {
  infoResultados = signal<
    | {
        anio: number;
        interes: number;
        valorFinalAnio: number;
        inversionAnual: number;
        interesTotal: number;
        montoTotalInvertido: number;
      }[]
    | undefined
  >(undefined);

  alCalcularResultadosInversion(info: IngresoInversion) {
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
    this.infoResultados.set(datosAnuales);
  }
}
