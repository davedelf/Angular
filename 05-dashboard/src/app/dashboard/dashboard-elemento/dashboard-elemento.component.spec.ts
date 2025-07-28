import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardElementoComponent } from './dashboard-elemento.component';

describe('DashboardElementoComponent', () => {
  let component: DashboardElementoComponent;
  let fixture: ComponentFixture<DashboardElementoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardElementoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardElementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
