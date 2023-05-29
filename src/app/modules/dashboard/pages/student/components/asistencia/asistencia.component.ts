import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {
  asistenciaForm!: FormGroup;
  participantes = [
    { nombre: 'Participante 1' },
    { nombre: 'Participante 2' },
    { nombre: 'Participante 3' }
    // Agrega más participantes si es necesario
  ];
  nombre: string = "";
  displayedColumns: string[] = ['nombre', 'asistencia'];
  constructor(private http: HttpClient, private snackBar: MatSnackBar, private formBuilder: FormBuilder ){}

  registrarAsistencia(){
    console.log(this.asistenciaForm.value)
}

ngOnInit(): void {
  this.asistenciaForm = this.formBuilder.group({});
    this.participantes.forEach((participante, index) => {
      this.asistenciaForm.addControl(index.toString(), this.formBuilder.control(''));
    });
}

  }




