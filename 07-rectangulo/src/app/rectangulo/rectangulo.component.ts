import {
  Component,
  EventEmitter,
  Input,
  input,
  model,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-rectangulo',
  standalone: true,
  imports: [],
  templateUrl: './rectangulo.component.html',
  styleUrl: './rectangulo.component.css',
})
export class RectanguloComponent {
  /*   @Input({ required: true }) tamanio!: {
    ancho: string;
    alto: string;
  };
  @Output() tamanioChange = new EventEmitter<{
    ancho: string;
    alto: string;
  }>(); */

  tamanio = model.required<{
    ancho: string;
    alto: string;
  }>();
  /* esto te ahorra tener que crear inputs y otuputs separados, pero es necesario especificar el tipo de dato o estructura. Esto crea un Model
  Signal, por lo que lo llamamos como un signal desde la plantilla*/

  alResetear() {
    this.tamanio.set({
      ancho: '200',
      alto: '100',
    });
  }
}

/* Para enlaces bidireccionales, existe una "palabra mágica" o convención, que consiste en colocar 
@Input y @Output con el mismo nombre pero con el sufijo Change en el @Output. Angular lo detecta automáticamente
y es una convención estandarizada entre desarrolladores. Si le colocamos otro sufijo, no funciona.
Dato util e importante */
