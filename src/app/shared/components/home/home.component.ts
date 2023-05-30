import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpleadoServiceService } from 'src/app/modules/dashboard/services/employee/employee.service';
import { UtilService } from 'src/app/modules/dashboard/services/util/util.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  spinner: boolean = false;
  email!: string 
  data!: any[];
  formRegistrarCoordinador = new FormGroup({
    email : new FormControl('')

  })

  constructor(private login : EmpleadoServiceService, private  utilService: UtilService){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  LoginCoordinador(){
    this.spinner = true;
    let bodyRequest: object = {
      correo: this.email,
    };

    this.login.login(bodyRequest).subscribe({
      next: (resp : any ) =>{
        this.data = resp;
        this.spinner = false
        this.utilService.showToast('Coordinador validado, Bienvenido');


      },
      error:(error : any)=>{
        if(error.status == 404){
          this.utilService.showToast(error.error.message);
        } else{
          this.utilService.showToast(
            'Error consultando actividades por periodo'
          );
        }
        console.error(error)
        this.spinner = false
      }
    })
  }
}
