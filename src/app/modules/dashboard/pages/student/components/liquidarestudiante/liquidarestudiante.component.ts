import { Component } from '@angular/core';
import { LiquidacionService } from 'src/app/modules/dashboard/services/liquidacion/liquidacion.service';

@Component({
  selector: 'app-liquidarestudiante',
  templateUrl: './liquidarestudiante.component.html',
  styleUrls: ['./liquidarestudiante.component.css']
})
export class LiquidarestudianteComponent {
  constructor(private liquidacionService: LiquidacionService) { }

  liquidarViaticos() {
    // Lógica para liquidar los viáticos de los estudiantes
    
  }

  liquidarElectivas() {
    // Lógica para liquidar las electivas de los estudiantes
    
  }
}
