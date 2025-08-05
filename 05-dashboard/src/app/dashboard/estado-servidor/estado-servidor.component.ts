import { Component, DestroyRef, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-estado-servidor',
  standalone: true,
  imports: [],
  templateUrl: './estado-servidor.component.html',
  styleUrl: './estado-servidor.component.css',
})
export class EstadoServidorComponent implements OnInit {
  estadoActual: 'online' | 'offline' | 'unknown' = 'unknown';
  private destroyRef = inject(DestroyRef);
  ngOnInit() {
    console.log('INIT');
    const intervalo = setInterval(() => {
      const rnd = Math.random();
      if (rnd > 0.5) {
        this.estadoActual = 'online';
      } else if (rnd > 0.1) {
        this.estadoActual = 'offline';
      } else {
        this.estadoActual = 'unknown';
      }
    }, 3000);
    this.destroyRef.onDestroy(() => {
      clearInterval(intervalo);
    });
  }
  constructor() {}

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }
}
