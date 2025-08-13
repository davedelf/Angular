import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Permiso } from './autenticacion.model';
import { AutenticacionService } from './autenticacion.service';

@Directive({
  selector: '[appAutenticacion]',
  standalone: true,
})
export class AutenticacionDirective {
  tipoDeUsuario = input.required<Permiso>({ alias: 'appAutenticacion' });
  private autenticacionService = inject(AutenticacionService);
  private templateRef =
    inject(
      TemplateRef
    ); /* Con esto tenemos acceso  al contenido de la plantilla */
  private viewCiontainerRef =
    inject(
      ViewContainerRef
    ); /* Con esto acceso a la plantilla del DOM que implementa la directiva */

  constructor() {
    effect(() => {
      if (this.autenticacionService.permisoActivo() == this.tipoDeUsuario()) {
        this.viewCiontainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewCiontainerRef.clear();
      }
    });
  }
}
