import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-elemento',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-elemento.component.html',
  styleUrl: './dashboard-elemento.component.css',
})
export class DashboardElementoComponent {

  /* Usando decoradores */
  /*   @Input({ required: true }) imagen!: {
    src: string;
    alt: string;
  };
  @Input({ required: true }) titulo!: string; */

  /* Usando signals */
  imagen = input.required<{
    src: string;
    alt: string;
  }>();

  titulo = input.required<string>();
}
