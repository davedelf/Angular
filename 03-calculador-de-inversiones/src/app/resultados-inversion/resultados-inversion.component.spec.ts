import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosInversionComponent } from './resultados-inversion.component';

describe('ResultadosInversionComponent', () => {
  let component: ResultadosInversionComponent;
  let fixture: ComponentFixture<ResultadosInversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadosInversionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosInversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
