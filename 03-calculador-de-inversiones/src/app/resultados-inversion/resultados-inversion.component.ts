import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
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

  get resultados() {
    return this.inversionService.infoResultado;
  }
}
