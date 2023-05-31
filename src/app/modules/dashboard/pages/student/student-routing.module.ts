import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import { LiquidacionComponent } from './components/liquidacion/liquidacion.component';
import { HomeComponent } from 'src/app/shared/components/home/home.component';
import { SelectionComponent } from './components/selection/selection.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CreareventoComponent } from './components/crearevento/crearevento.component';

const routes: Routes = [
  {
    path: 'login', component: HomeComponent
  },
  {
    path: 'registro' , component : RegistroComponent
  },
  {
    path: 'crear-evento' , component : CreareventoComponent
  },
  {
    path: 'crearevento' , component: CreareventoComponent
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
    path: 'liquidacion' , component: LiquidacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
