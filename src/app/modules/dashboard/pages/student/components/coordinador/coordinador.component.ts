import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmpleadoServiceService } from 'src/app/modules/dashboard/services/employee/employee.service';
import { UtilService } from 'src/app/modules/dashboard/services/util/util.service';

@Component({
  selector: 'app-coordinador',
  templateUrl: './coordinador.component.html',
  styleUrls: ['./coordinador.component.css']
})
export class CoordinadorComponent {
  
    icodempleado!: Number
    rol!: string 
    codunidad: Number = 13
    nombre!: string 
    apellido!: string 
    cedula!: string
    celular!: string
    correo!: string
    spinner: boolean = false;
    data! : any[] 
  formRegistrarCoordinador = new FormGroup({
  icodempleado: new FormControl,
  rol: new FormControl(''),
  codunidad: new FormControl(''),
  nombre: new FormControl(''),
  apellido: new FormControl(''),
  cedula: new FormControl(''),
  celular: new FormControl(''),
  correo: new FormControl('')
  })

  constructor( private emp : EmpleadoServiceService, private util : UtilService){

  }

  RegistrarCoordinador(){
    this.spinner = true;
    let bodyRequest: object = {
      nombre: this.nombre,
      apellido: this.apellido,
      cedula: this.cedula,
      correo: this.correo
    };

    this.emp.register(bodyRequest).subscribe({
      next : (resp :any)=>{
        this.data = resp;
        this.spinner = false
        this.util.showToast('Coordinador ingresado exitosamente');
      },

      error : (error : any)=>{
        if(error.status == 404){
          this.util.showToast(error.error.message);
        } else{
          this.util.showToast(
            'No se pudo ingresar el coordinador'
          );
        }
        console.error(error)
        this.spinner = false
      }


    })



    
  }
}

