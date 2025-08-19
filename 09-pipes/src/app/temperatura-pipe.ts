import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TemperaturaPipe implements PipeTransform {
  transform(
    value: string | number | null,
    tipoEntrada: 'cel' | 'fah',
    tipoSalida?: 'cel' | 'fah'
  ) {
    if (!value) {
      return value;
    }
    let val: number;
    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }
    let temperaturaSalida: number;
    if (tipoEntrada === 'cel' && tipoSalida === 'fah') {
      temperaturaSalida = val * (9 / 5) + 32; /* Valor en Fahrenheit  */
    } else if (tipoEntrada === 'fah' && tipoSalida === 'cel') {
      temperaturaSalida = (val - 32) * (5 / 9);
    } else {
      temperaturaSalida = val;
    }

    let simbolo: '°F' | '°C';
    if (!tipoSalida) {
      simbolo = tipoEntrada === 'cel' ? '°C' : '°F';
    } else {
      simbolo = tipoSalida === 'cel' ? '°C' : '°F';
    }
    return `${temperaturaSalida.toFixed(2)} ${simbolo}`;
  }
}
