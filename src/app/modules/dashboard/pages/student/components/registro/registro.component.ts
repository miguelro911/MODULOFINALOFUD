import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EmpleadoServiceService } from 'src/app/modules/dashboard/services/employee/employee.service';
import { UtilService } from 'src/app/modules/dashboard/services/util/util.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent {
  nombre: string = '';
  apellido: string = '';
  cedula: string = '';
  celular: string = '';
  correo: string = '';
  spinner: boolean = false;

  constructor(
    private empleadoService: EmpleadoServiceService,
    public utilService: UtilService
  ) {}

  registerUser() {
    this.spinner = true;
    let bodyRequest: object = {
      nombre: this.nombre,
      apellido: this.apellido,
      cedula: this.cedula,
      celular: this.celular,
      correo: this.correo,
    };
    this.empleadoService.register(bodyRequest).subscribe({
      next: (resp: any) => {
        this.spinner = false;
        this.utilService.showToast('Usuario registrado exitosamente');
        this.setUntouchedFields();
      },
      error: (error: any) => {
        if (error.status == 404) {
          this.utilService.showToast(error.error.message);
        } else {
          this.utilService.showToast('Error en el registro del usuario');
        }
        console.error(error);
        this.setUntouchedFields();
      },
    });
  }

  areValidFields(): boolean {
    return (
      this.formControl_nombre.errors == null &&
      this.formControl_apellido.errors == null &&
      this.formControl_cedula.errors == null &&
      this.formControl_celular.errors == null &&
      this.formControl_correo.errors == null
    );
  }

  setUntouchedFields(): void {
    this.nombre = '';
    this.apellido = '';
    this.cedula = '';
    this.celular = '';
    this.correo = '';
    this.formControl_nombre.markAsUntouched();
    this.formControl_apellido.markAsUntouched();
    this.formControl_cedula.markAsUntouched();
    this.formControl_celular.markAsUntouched();
    this.formControl_correo.markAsUntouched();
  }

  formControl_nombre = new FormControl('', [Validators.required]);
  formControl_apellido = new FormControl('', [Validators.required]);
  formControl_cedula = new FormControl('', [Validators.required]);
  formControl_celular = new FormControl('', [Validators.required]);
  formControl_correo = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
