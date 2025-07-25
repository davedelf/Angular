import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { InversionService } from '../inversion.service';

@Component({
  selector: 'app-resultados-inversion',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './resultados-inversion.component.html',
  styleUrl: './resultados-inversion.component.css',
})
export class ResultadosInversionComponent {
  private inversionService =
    inject(
      InversionService
    ); /* Funciona igual que el constructor pero más simplificado */
  resultados = computed(() => this.inversionService.infoResultado());

  /* Con computed retorna un singal de solo lectura, no modificable. Con esto aseguramos no modificar los
  datos fuera del servicio 
  resultados = computed(() => this.inversionService.infoResultado());


  resultados=this.inversionService.infoResultado()    retorna el signal, pero es modificable

      .asReadOnly()  hace que sea sólo lectura

      resultados = this.inversionService.infoResultado.asReadonly();
  */
}
