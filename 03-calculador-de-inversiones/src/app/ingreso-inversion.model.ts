export interface IngresoInversion {
  inversionInicial: number;
  inversionAnual: number;
  rendimientoEsperado: number;
  duracion: number;
}

export interface ResultadoInversion {
  anio: number;
  interes: number;
  valorFinalAnio: number;
  inversionAnual: number;
  interesTotal: number;
  montoTotalInvertido: number;
}
