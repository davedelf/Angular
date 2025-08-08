import { Component } from '@angular/core';
import { RectanguloComponent } from './rectangulo/rectangulo.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RectanguloComponent, FormsModule],
})
export class AppComponent {
  tamanioRectangulo = {
    ancho: '100',
    alto: '100',
  };
}
