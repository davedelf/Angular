import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  output,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
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
export class NuevoRegistroComponent implements OnInit, AfterViewInit {
  /*   @Output() agregar = new EventEmitter<{
    titulo: string;
    texto: string;
  }>(); */
  agregar = output<{
    titulo: string;
    texto: string;
  }>();

  ngAfterViewInit() {
    /* Asegura el acceso a los elementos obtenidos mediante ViewChild luego de ser renderizados */
    console.log('AFTER VIEW INIT');
    console.log(this.miFormulario?.nativeElement);
  }
  ngOnInit() {
    /* OnInit no garantiza que el elemento ya exista - esté renderizado, en cambio AfterViewInit si (ya se inició-renderizó la vista, por lo que el formulario ya existe) */
    console.log('ON INIT');
    console.log(this.miFormulario?.nativeElement);
  }

  @ViewChild('miFormulario') private miFormulario?: ElementRef<HTMLFormElement>;
  /*   private miFormulario =
    viewChild.required<ElementRef<HTMLFormElement>>('miFormulario'); */

  alEnviar(titulo: string, textoRegistro: string) {
    this.agregar.emit({titulo:titulo,texto:textoRegistro});
    this.miFormulario?.nativeElement.reset();
  }
}

/* Usamos nativeElement xq ElementRef es generico y envuelve a HTMLFormElement */
/* En viewChild podemos usar ? o alternativamente required, pero con eso estamos obligados a que exista el elemento child.
viewChild sólo está disponible en versiones de Angular >= v17.3 .
Si necesitamos seleccionar múltiples elementos de la plantilla, usamos ViewChildren*/
