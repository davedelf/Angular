import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-ciclodevida',
  standalone: true,
  imports: [],
  templateUrl: './ciclodevida.component.html',
  styleUrl: './ciclodevida.component.css',
})
export class CiclodevidaComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() texto?: string;

  constructor() {
    console.log('CONSTRUCTOR');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(cambia: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(cambia);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
