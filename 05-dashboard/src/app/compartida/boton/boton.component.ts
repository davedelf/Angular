import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css',
})
export class BotonComponent {}

/* Selectores

  Son muy versatiles, podemos seleccionar elementos individuales, en grupo, aquellos que sean de un determinado
  tipo, que compartan ciertos atrivutos o clase, entre otras cosas.
  
  Lo que hace es "activar" el componente y que éste tome control sobre el elemento que contiene ese selector
  Ej:

  button[appBoton]  -->  Todos los elementos de tipo button que contengan el selector appBoton van a ser controlados
  por el componente
  
  De esta forma estamos extendiendo elementos integrados - <button></button> - 
  con selectores por atributo - selector:'button[appButton]' - 
  */
