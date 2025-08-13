import { Component, computed, inject } from '@angular/core';

import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { RecursosAprendizajeComponent } from './recursos-aprendizaje/recursos-aprendizaje.component';
import { AutenticacionService } from './autenticacion/autenticacion.service';
import { NgIf } from '@angular/common';
import { AutenticacionDirective } from './autenticacion/autenticacion.directive';

@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AutenticacionComponent, RecursosAprendizajeComponent,NgIf,AutenticacionDirective],
})
export class AppComponent {
  private autenticacionService = inject(AutenticacionService);
  esAdmin=computed(()=>this.autenticacionService.permisoActivo()==='admin');
}
