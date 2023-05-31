import { Component } from '@angular/core';
import { FormControl,  Validators } from '@angular/forms';
import { LayoutComponent } from 'src/app/modules/dashboard/layout/layout.component';
import { EmpleadoServiceService } from 'src/app/modules/dashboard/services/employee/employee.service';
import { UtilService } from 'src/app/modules/dashboard/services/util/util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  spinner: boolean = false;
  email!: string;
  data!: any[];

  constructor(
    private empleadoService: EmpleadoServiceService,
    public utilService: UtilService
  ) {}

  LoginCoordinador() {
    this.spinner = true;
    let bodyRequest: object = {
      email: this.email
    };
    this.empleadoService.login(bodyRequest).subscribe({
      next: (resp: any) => {
        this.data = resp;
        this.utilService.showToast('Coordinador logeado, Bienvenido');
        LayoutComponent.loginEmail = this.email;
        this.spinner = false;
        this.setUntouchedFields();
      },
      error: (error: any) => {
        if (error.status == 404) {
          this.utilService.showToast(error.error.message);
        } else {
          this.utilService.showToast('Empleado no encontrado');
        }
        console.error(error);
        this.spinner = false;
        this.setUntouchedFields();
      },
    });
  }

  setUntouchedFields(): void {
    this.email = '';
    this.formControl_email.markAsUntouched();
  }

  formControl_email = new FormControl('', [Validators.required, Validators.email]);
  
}
