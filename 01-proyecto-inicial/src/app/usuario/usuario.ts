import { Component, computed, Input, input } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})

//Añadimos cuerpo a la clase del componente
export class Usuario {
  /*   @Input({ required: true }) avatar!: string;
  @Input({ required: true }) nombre!: string; */
  nombre = input.required<string>();
  avatar = input.required<string>(); //operador diamond para especificar el tipo esperado en el input. Tipos genéiricos. function input<T>()

  rutaImagen = computed(() => {
    return this.avatar();
  });

  alSeleccionarUsuario() {}
}

/**
 * Inputs de signals
 * .required(): o le podemos pasar un valor inicial
 * Evitamos tener que usar avatar!: para convencer a TypeScript. Conviene mil veces usar Signals.
 *
 */
