import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import { LiquidarestudianteComponent } from './components/liquidarestudiante/liquidarestudiante.component';
import { HomeComponent } from 'src/app/shared/components/home/home.component';
import { SelectionComponent } from './components/selection/selection.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'calendario', component: CalendarioComponent
  },
  {
    path: 'seleccion', component: SelectionComponent
  },
  {
    path: 'asistencia', component: AsistenciaComponent
  },
  {
    path: 'liquidarestudiante' , component:LiquidarestudianteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
