import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidarestudianteComponent } from './liquidarestudiante.component';

describe('LiquidarestudianteComponent', () => {
  let component: LiquidarestudianteComponent;
  let fixture: ComponentFixture<LiquidarestudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiquidarestudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiquidarestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
