import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  showToast(msg: string, btnMsg = "Ok") {
    this.snackBar.open(msg, btnMsg, {
      verticalPosition: "bottom",
      horizontalPosition: "right",
      duration: 5000
    });
  }

  validateFormControl(formControl: FormControl): any {
    if (formControl.hasError('required')) {
      return 'Debe ingresar un valor';
    }
    if (formControl.hasError('email')) {
      return 'Ingrese un email válido';
    }
    if (formControl.hasError('maxlength')) {
      return `Máximo ${formControl.errors?.maxlength.requiredLength} caracteres`;
    }
    if (formControl.hasError('minlength')) {
      console.log(formControl);
      return `Mínimo ${formControl.errors?.minlength.requiredLength} caracteres`;
    }
    return '';
  }

}
