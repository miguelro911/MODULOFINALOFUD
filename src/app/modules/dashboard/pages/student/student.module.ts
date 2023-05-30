import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import { LiquidarestudianteComponent } from './components/liquidarestudiante/liquidarestudiante.component';
import { PeriodoSelecComponent } from './components/periodo-selec/periodo-selec.component';
import { SelectionComponent } from './components/selection/selection.component';

@NgModule({
  declarations: [
    CalendarioComponent,
    AsistenciaComponent,
    LiquidarestudianteComponent,
    PeriodoSelecComponent,
    SelectionComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }
