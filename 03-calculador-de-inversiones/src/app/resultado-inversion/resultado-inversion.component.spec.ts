import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoInversionComponent } from './resultado-inversion.component';

describe('ResultadoInversionComponent', () => {
  let component: ResultadoInversionComponent;
  let fixture: ComponentFixture<ResultadoInversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadoInversionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoInversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
