import { Component } from '@angular/core';

import { CiclodevidaComponent } from "./ciclodevida/ciclodevida.component";

@Component({
    selector: 'app-raiz',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [CiclodevidaComponent]
})
export class AppComponent {
  componenteCicloDeVidaEsVisible = false;
  textoCicloDeVida = 'Un número aleatorio: ' + Math.random() * 100;

  alAlternarVisibilidadCicloDeVida() {
    this.componenteCicloDeVidaEsVisible = !this.componenteCicloDeVidaEsVisible;
  }

  alCambiarTextoCicloDeVida() {
    this.textoCicloDeVida = 'Un número aleatorio: ' + Math.random() * 100;
  }
}
