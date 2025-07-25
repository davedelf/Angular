import { Injectable, signal } from '@angular/core';
import { IngresoInversion } from './ingreso-inversion.model';

@Injectable({
  providedIn: 'root',
})
export class InversionService {
  infoResultado = signal<
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

  calcularResultadoInversion(info: IngresoInversion) {
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
    this.infoResultado.set(datosAnuales);
  }
}
