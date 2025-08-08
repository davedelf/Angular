import { Component } from '@angular/core';
import { NuevoRegistroComponent } from "../nuevo-registro/nuevo-registro.component";

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [NuevoRegistroComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

}
