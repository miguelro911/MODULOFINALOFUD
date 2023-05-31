import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crearevento',
  templateUrl: './crearevento.component.html',
  styleUrls: ['./crearevento.component.css']
})
export class CreareventoComponent implements OnInit {
  codigo! : Number
  instrumento! : string
  FechaInicio! : string
  FechaFin! : string
  Calificacion! : Number
  Obra! : string 
  consecutivo! : string
  HoraInicio! : string
  HoraFinal! :   string
  formRegistrarEvento = new FormGroup({
    codigo : new FormControl(''),
    instrumento : new FormControl(''),
    FechaInicio : new FormControl(''),
    FechaFin : new FormControl(''),
    Calificacion : new FormControl(''),
    Obra : new FormControl(''),
    consecutivo : new FormControl(''),
    HoraInicio : new FormControl(''),
    HoraFinal : new FormControl('')

  })

  ngOnInit(): void {
    
  }

  CrearEvento(){

  }

  concatdate(fecha : string, hora : string):string{
    if (fecha && hora) {
      // Combina la fecha y la hora en un solo objeto Date
      const dateTimeString = fecha + 'T' + hora;
      const combinedDateTime = new Date(dateTimeString);
      return dateTimeString
  }
  return ''
}
  
}
