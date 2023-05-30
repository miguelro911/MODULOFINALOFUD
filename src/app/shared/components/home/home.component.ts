import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from 'src/app/modules/dashboard/services/login/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  email!: string 
  data!: any[];
  formRegistrarCoordinador = new FormGroup({
    email : new FormControl('')

  })

  constructor(private login : LoginService){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  LoginCoordinador(){
    this.login.getDataByEmail(this.email)
      .subscribe(response => {
        this.data = response;
      });
  }
}
