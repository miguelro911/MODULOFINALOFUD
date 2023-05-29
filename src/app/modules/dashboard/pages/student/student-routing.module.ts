import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import { LiquidarestudianteComponent } from './components/liquidarestudiante/liquidarestudiante.component';
import { CreareventoComponent } from './components/crearevento/crearevento.component';

const routes: Routes = [
  {
    path: 'calendario', component: CalendarioComponent
  },
  {
    path: 'asistencia', component: AsistenciaComponent
  },
  {
    path: 'liquidarestudiante' , component:LiquidarestudianteComponent
  },
  {
    path: 'crearevento' , component:CreareventoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
