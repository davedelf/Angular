import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { BotonComponent } from '../../../compartida/boton/boton.component';
import { ControlComponent } from '../../../compartida/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevo-registro',
  standalone: true,
  imports: [BotonComponent, ControlComponent, FormsModule],
  templateUrl: './nuevo-registro.component.html',
  styleUrl: './nuevo-registro.component.css',
})
export class NuevoRegistroComponent {
  /*   @ViewChild('miFormulario') private miFormulario?: ElementRef<HTMLFormElement>; */
  private miFormulario =
    viewChild.required<ElementRef<HTMLFormElement>>('miFormulario');

  alEnviar(titulo: string, textoIngresado: string) {
    console.log(titulo);
    console.log(textoIngresado);
    this.miFormulario().nativeElement.reset();
  }
}

/* Usamos nativeElement xq ElementRef es generico y envuelve a HTMLFormElement */
/* En viewChild podemos usar ? o alternativamente required, pero con eso estamos obligados a que exista el elemento child.
viewChild sólo está disponible en versiones de Angular >= v17.3 .
Si necesitamos seleccionar múltiples elementos de la plantilla, usamos ViewChildren*/
