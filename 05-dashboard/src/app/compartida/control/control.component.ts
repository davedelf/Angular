import {
  AfterContentInit,
  Component,
  contentChild,
  ContentChild,
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
export class ControlComponent implements AfterContentInit {
  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  /*   @ContentChild('input')
    private control?: ElementRef<
      HTMLInputElement | HTMLTextAreaElement
    >;  */

  ngAfterContentInit() {


  }
  /*   @HostListener('click')

  /*   @HostBinding('class') nombreClase =
    'control'; /* HostBinding agrega nombreClase como una propiedad del host. Es similar a host:{} */
  etiqueta = input.required<string>();

  private el = inject(ElementRef);

  alClickear() {
    console.log('clickeado');
    console.log(this.el);
    console.log(this.control());
  }
}
