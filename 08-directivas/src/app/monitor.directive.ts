import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appMonitor]',
  standalone: true,
  host: {
    '(click)': 'alMonitorear()',
  },
})
export class MonitorDirective {
  private elementRef = inject(ElementRef);

  alMonitorear() {
    console.log('Clickeado en consola');
    console.log(this.elementRef.nativeElement);
  }
}
