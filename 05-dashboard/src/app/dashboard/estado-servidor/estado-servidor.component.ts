import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-estado-servidor',
  standalone: true,
  imports: [],
  templateUrl: './estado-servidor.component.html',
  styleUrl: './estado-servidor.component.css',
})
export class EstadoServidorComponent implements OnInit, OnDestroy {
  estadoActual: 'online' | 'offline' | 'unknown' = 'unknown';
  private intervalo?: ReturnType<typeof setInterval>;
  ngOnInit() {
    this.intervalo = setInterval(() => {
      const rnd = Math.random();
      if (rnd > 0.5) {
        this.estadoActual = 'online';
      } else if (rnd > 0.1) {
        this.estadoActual = 'offline';
      } else {
        this.estadoActual = 'unknown';
      }
    }, 3000);
  }
  constructor() {}

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }

  ngOnDestroy() {
    clearTimeout(this.intervalo);
  }
}
