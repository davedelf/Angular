import { Directive, input, Input } from '@angular/core';

@Directive({
  selector: 'a[appEnlaceSeguro]',
  standalone: true,
  host: {
    '(click)': 'alConfirmarSalirPagina($event)',
  },
})
export class EnlaceSeguroDirective {
  parametroConsulta = input('miapp',{alias:'appEnlaceSeguro'});
  constructor() {
    console.log('La directiva del enlace seguro está activa');
  }

  alConfirmarSalirPagina(evento: MouseEvent) {
    const quiereSalir = window.confirm('¿Quieres salir de la aplicación?');
    if (quiereSalir === true) {
      const direccion = (evento.target as HTMLAnchorElement).href;
      (evento.target as HTMLAnchorElement).href =
        direccion + '?from=' + this.parametroConsulta();
      return;
    }

    evento.preventDefault();
  }
}
