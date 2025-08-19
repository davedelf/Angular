import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TemperaturaPipe } from './temperatura-pipe';
import { OrdenarPipe } from './ordenar.pipe';

@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [DatePipe, TemperaturaPipe, OrdenarPipe],
})
export class AppComponent {
  fechaActual = new Date();
  temperaturasActuales = {
    berlin: 4.2749812,
    nuevaYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  temperaturasHistoricas = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];

  constructor() {
    this.temperaturasHistoricas.sort((a, b) => (a > b ? 1 : -1));
  }
  reiniciarTemperatura(indice: number) {
    this.temperaturasHistoricas[indice] = 18;
    /*    const temperaturasNuevas = [...this.temperaturasHistoricas];
    temperaturasNuevas[indice] = 18;
    this.temperaturasHistoricas=temperaturasNuevas */
  }
}
