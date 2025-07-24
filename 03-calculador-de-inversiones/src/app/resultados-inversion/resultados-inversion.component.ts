import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-resultados-inversion',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './resultados-inversion.component.html',
  styleUrl: './resultados-inversion.component.css',
})
export class ResultadosInversionComponent {
  resultados = input<
    {
      anio: number;
      interes: number;
      valorFinalAnio: number;
      inversionAnual: number;
      interesTotal: number;
      montoTotalInvertido: number;
    }[]
  >()
}
