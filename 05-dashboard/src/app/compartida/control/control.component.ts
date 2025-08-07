import {
  AfterContentInit,
  afterNextRender,
  afterRender,
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
export class ControlComponent {
  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  /*   @ContentChild('input')
    private control?: ElementRef<
      HTMLInputElement | HTMLTextAreaElement
    >;  */

  ngAfterContentInit() {}
  /*   @HostListener('click')

  /*   @HostBinding('class') nombreClase =
    'control'; /* HostBinding agrega nombreClase como una propiedad del host. Es similar a host:{} */
  etiqueta = input.required<string>();

  private el = inject(ElementRef);

  constructor() {
    afterRender(() => {
      /* Se registra una y otra vez que se registra un cambio  en toda la app*/
      console.log('AFTER RENDER ');
    });

    afterNextRender(() => {
      console.log('AFTER NEXT RENDER');
    });
  }
  alClickear() {
    console.log('clickeado');
    console.log(this.el);
    console.log(this.control());
  }
}
/* Los otros Hooks - OnInit, etc - se registran en el componente que los contienen, mientras que afterRender y afterNextRender en toda la app.
afterRender se ejecuta todas las veces que ocurran cambios en la app, y afterNextRender solo se activará en el próximo cambio.
por lo tanto, estos hooks pueden ser utiles si necesitamos ejecutar algún código cuando suceda algún cambio en la app*/
