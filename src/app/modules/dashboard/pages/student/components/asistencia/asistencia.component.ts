import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent {
  nombre: string = "";
  constructor(private http: HttpClient, private snackBar: MatSnackBar ){}

  registrarAsistencia(){
    const asistenciaData = {
      nombre: this.nombre
    };
    this.http.post('https://ejemplo.com/api/asistencia', asistenciaData)
    .subscribe(
      response => {
        this.snackBar.open('Asistencia registrada exitosamente', 'Cerrar', { duration: 3000 });
      },
      error => {
        this.snackBar.open('Error al registrar la asistencia', 'Cerrar', { duration: 3000 });
      }
    );
}

  }




