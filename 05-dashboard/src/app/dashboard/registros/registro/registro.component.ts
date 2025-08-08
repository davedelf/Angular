import { Component, input, output, signal } from '@angular/core';
import { NuevoRegistroComponent } from '../nuevo-registro/nuevo-registro.component';
import { Registro } from '../registros.model';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [NuevoRegistroComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})
export class RegistroComponent {
  informacion = input.required<Registro>();
  detallesVisibles = signal(false);
  cerrado = output();

  alAlternarDetalles() {
    this.detallesVisibles.update((eraVisible) => !eraVisible);
  }

  alMarcarComoCompletado() {
    this.cerrado.emit(); /* Solamente informa que ocurrió un evento, por eso no recibe ningún parámetro */
  }
}
/* 
 .update() funciona como .set(). Toma como parámetro el valor anterior del signal y lo actualiza 
 */
