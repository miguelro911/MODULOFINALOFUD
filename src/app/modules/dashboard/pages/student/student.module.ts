import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import { LiquidacionComponent } from './components/liquidacion/liquidacion.component';
import { PeriodoSelecComponent } from './components/periodo-selec/periodo-selec.component';
import { SelectionComponent } from './components/selection/selection.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CreareventoComponent } from './components/crearevento/crearevento.component';

@NgModule({
  declarations: [
    CalendarioComponent,
    AsistenciaComponent,
    LiquidacionComponent,
    PeriodoSelecComponent,
    SelectionComponent,
    RegistroComponent,
    CreareventoComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }
