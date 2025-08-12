import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appEnlaceSeguro]',
  standalone: true,
  host: {
    '(click)': 'alConfirmarSalirPagina($event)',
  },
})
export class EnlaceSeguroDirective {
  constructor() {
    console.log('La directiva del enlace seguro está activa');
  }

  alConfirmarSalirPagina(event: MouseEvent) {
    const quiereSalir = window.confirm('¿Quieres salir de la aplicación?');
    if (quiereSalir === true) {
      return;
    }

    event.preventDefault();
  }
}
