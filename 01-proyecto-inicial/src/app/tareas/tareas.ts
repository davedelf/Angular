import { Component, Input } from '@angular/core';
import { TareaComponent } from '../tarea/tarea';
import { NuevaTarea } from './nueva-tarea/nueva-tarea';
import { type NuevaTareaInfo } from '../tarea/tarea.model';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [TareaComponent, NuevaTarea],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas {
  @Input({ required: true }) idUsuario!: string;
  @Input({ required: true }) nombre!: string;
  estaAgregandoTareaNueva = false;

  tareas = [
    {
      id: 't1',
      idUsuario: 'u1',
      titulo: 'Dominar Angular',
      resumen:
        'Apreder todas las características básicas y avanzadas de Angular cómo apicarlas.',
      expira: '2025-01-01',
    },
    {
      id: 't2',
      idUsuario: 'u3',
      titulo: 'Crear el primer prototipo',
      resumen: 'Crear el primer prototipo del sitio web de la tienda',
      expira: '2025-11-05',
    },
    {
      id: 't3',
      idUsuario: 'u3',
      titulo: 'Preparar la plantilla del carrito',
      resumen:
        'Preparar y describir una plantilla de carrito de compras de la tienda online',
      expira: '2025-05-16',
    },
  ];

  get tareasUsuarioSeleccionado() {
    return this.tareas.filter((tarea) => tarea.idUsuario == this.idUsuario);
  }

  alCompletarTarea(id: string) {
    this.tareas = this.tareas.filter((tarea) => tarea.id !== id);
  }

  alIniciarNuevaTarea() {
    this.estaAgregandoTareaNueva = true;
  }

  alCancelarTareaNueva() {
    this.estaAgregandoTareaNueva = false;
  }

  alAgregarTarea(infoDeTarea: NuevaTareaInfo) {
    this.tareas.unshift({
      id: new Date().getTime().toString(),
      titulo: infoDeTarea.titulo,
      resumen: infoDeTarea.resumen,
      expira: infoDeTarea.fecha,
      idUsuario: this.idUsuario,
    });

    this.estaAgregandoTareaNueva = false;
  }
}
