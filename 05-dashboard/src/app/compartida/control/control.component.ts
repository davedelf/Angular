import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'alClickear()',
  },
}) /* Esto es similar a colocar el atributo class="control" cuando creamos el componete app-control en nuevo-registro html,
solo que ésto se lo da por defecto, entonces siempre tendrá ese atributo y no es necesario especificarlo en cada componente */
export class ControlComponent {
  /*   @HostListener('click')

  /*   @HostBinding('class') nombreClase =
    'control'; /* HostBinding agrega nombreClase como una propiedad del host. Es similar a host:{} */
  etiqueta = input.required<string>();

  private el=inject(ElementRef)
  alClickear() {
    console.log('clickeado');
    console.log(this.el);
  }
}
