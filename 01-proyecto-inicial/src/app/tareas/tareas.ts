import { Component, Input } from '@angular/core';
import { Tarea } from "../tarea/tarea";

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [Tarea],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas {
  @Input() nombre?: string;
}
