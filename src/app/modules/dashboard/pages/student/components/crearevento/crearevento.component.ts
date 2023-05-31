import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crearevento',
  templateUrl: './crearevento.component.html',
  styleUrls: ['./crearevento.component.scss']
})
export class CreareventoComponent implements OnInit {

  formRegistrarEvento = new FormGroup({
    codigo : new FormControl(''),
    instrumento : new FormControl(''),
    FechaInicio : new FormControl(''),
    FechaFin : new FormControl(''),
    Calificacion : new FormControl(''),
    Obra : new FormControl(''),
    consecutivo : new FormControl('')
  })

  ngOnInit(): void {
    
  }

  CrearEvento(){

  }
  

}
