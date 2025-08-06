import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('miFormulario') miFormulario?: ElementRef<HTMLFormElement>;

  alEnviar(titulo: string, textoIngresado: string) {
    console.log(titulo);
    console.log(textoIngresado);
    this.miFormulario?.nativeElement.reset();
  }
}

/* Usamos nativeElement xq ElementRef es generico y envuelve a HTMLFormElement */
