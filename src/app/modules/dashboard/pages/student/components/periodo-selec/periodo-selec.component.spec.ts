import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoSelecComponent } from './periodo-selec.component';

describe('PeriodoSelecComponent', () => {
  let component: PeriodoSelecComponent;
  let fixture: ComponentFixture<PeriodoSelecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodoSelecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodoSelecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
