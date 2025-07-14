import { Component, Input } from '@angular/core';
import { Tarea } from './tarea.model';

@Component({
  selector: 'app-tarea',
  standalone: true,
  templateUrl: './tarea.html',
  styleUrl: './tarea.css',
})
export class TareaComponent {
  @Input({ required: true }) tarea!: Tarea;
}
