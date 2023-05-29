import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CalendarTypes } from '../../util/enums/calendarTypes';
import { Calendar } from '../../util/interfaces/calendar';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor(private snackBar: MatSnackBar) {}

  showToast(msg: string, btnMsg = 'Ok') {
    this.snackBar.open(msg, btnMsg, {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 5000,
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

  getCalendarType(calendarType: string): string {
    for (let item in CalendarTypes) {
      if (isNaN(Number(item))) {
        if (CalendarTypes[item] == calendarType) {
          return item;
        }
      }
    }
    return 'Null';
  }

  getCalendarsByType(calendars: Array<Calendar>, type: string) {
    return calendars.filter((calendar) => {
      return calendar.idtipocalen == type;
    });
  }

}
