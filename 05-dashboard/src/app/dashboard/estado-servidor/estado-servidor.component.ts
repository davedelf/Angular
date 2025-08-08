import {
  Component,
  DestroyRef,
  OnInit,
  effect,
  inject,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-estado-servidor',
  standalone: true,
  imports: [],
  templateUrl: './estado-servidor.component.html',
  styleUrl: './estado-servidor.component.css',
})
export class EstadoServidorComponent implements OnInit {
  estadoActual = signal<'online' | 'offline' | 'unknown'>('offline');
  private destroyRef = inject(DestroyRef);
  ngOnInit() {
    /*  */
    const intervalo = setInterval(() => {
      const rnd = Math.random();
      if (rnd > 0.5) {
        this.estadoActual.set('online');
      } else if (rnd > 0.1) {
        this.estadoActual.set('offline');
      } else {
        this.estadoActual.set('unknown');
      }
    }, 3000);
    this.destroyRef.onDestroy(() => {
      clearInterval(intervalo);
    });
  }
  constructor() {
    effect(() => {
      /* permite ejecutar código cuando el estado del signal cambia */
      console.log(this.estadoActual());
    });
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }
}

/* 
Funciones de Limpieza para Signal Effects en Angular
Cuando trabajes con Signal effects, puede que en algunas ocasiones necesites realizar algún trabajo de limpieza, antes de que la función effect se vuelva a ejecutar (por ejemplo para limpiar un medidor de tiempo, o algo similar).

¡La función effect() de Angular, te permite hacerlo!

Te brinda un hook llamado onCleanup al cual puedes ejecutr como parte de tu función effect para definir qué es lo que debería ocurrir antes de que el código de effect se ejecute la próxima vez:



effect((onCleanup) => {
  const tareas = obtenerTareas();
  const contador = setTimeout(() => {
    console.log(`Número actual de tareas: ${tareas().length}`);
  }, 1000);
  onCleanup(() => {
    clearTimeout(contador);
  });
}); */
