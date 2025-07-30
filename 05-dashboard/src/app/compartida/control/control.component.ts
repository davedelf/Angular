import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
  },
}) /* Esto es similar a colocar el atributo class="control" cuando creamos el componete app-control en nuevo-registro html,
solo que ésto se lo da por defecto, entonces siempre tendrá ese atributo y no es necesario especificarlo en cada componente */
export class ControlComponent {
  etiqueta = input.required<string>();
}
