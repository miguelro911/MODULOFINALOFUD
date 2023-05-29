import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import { LiquidarestudianteComponent } from './components/liquidarestudiante/liquidarestudiante.component';
import { CreareventoComponent } from './components/crearevento/crearevento.component';
import { PeriodoSelecComponent } from './components/periodo-selec/periodo-selec.component';

@NgModule({
  declarations: [
    CalendarioComponent,
    AsistenciaComponent,
    LiquidarestudianteComponent,
    CreareventoComponent,
    PeriodoSelecComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }
