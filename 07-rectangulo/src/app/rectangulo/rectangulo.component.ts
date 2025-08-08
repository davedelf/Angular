import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-rectangulo',
  standalone: true,
  imports: [],
  templateUrl: './rectangulo.component.html',
  styleUrl: './rectangulo.component.css',
})
export class RectanguloComponent {
  @Input({ required: true }) tamanio!: {
    ancho: string;
    alto: string;
  };
  @Output() tamanioChange = new EventEmitter<{
    ancho: string;
    alto: string;
  }>();

  alResetear() {
    this.tamanioChange.emit({
      ancho: '200',
      alto: '100',
    });
  }
}

/* Para enladces bidireccionales, existe una "palabra mágica" o convención, que consiste en colocar 
@Input y @Output con el mismo nombre pero con el sufijo Change en el @Output. Angular lo detecta automáticamente
y es una convención estandarizada entre desarrolladores. Si le colocamos otro sufijo, no funciona.
Dato util e importante */
