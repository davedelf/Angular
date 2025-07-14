import { Component, Input } from '@angular/core';
interface Tarea {
  id: string;
  idUsuario: string;
  titulo: string;
  resumen: string;
  expira: string;
}
@Component({
  selector: 'app-tarea',
  standalone: true,
  templateUrl: './tarea.html',
  styleUrl: './tarea.css',
})
export class TareaComponent {
  @Input({ required: true }) tarea!: Tarea;
}
