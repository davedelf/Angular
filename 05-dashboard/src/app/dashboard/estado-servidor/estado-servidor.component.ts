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
      console.log(this.estadoActual());
    });
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }
}
