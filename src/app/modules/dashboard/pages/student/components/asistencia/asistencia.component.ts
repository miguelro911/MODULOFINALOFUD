import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentParticipationService } from 'src/app/modules/dashboard/services/student-participation/student-participation.service';
import { StudentService } from 'src/app/modules/dashboard/services/student/student.service';
import { UtilService } from 'src/app/modules/dashboard/services/util/util.service';
import { Calendar } from 'src/app/modules/dashboard/util/interfaces/calendar';
import { StudentInstrumentProjection } from 'src/app/modules/dashboard/util/interfaces/studentInstrumentProjection';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.scss'],
})
export class AsistenciaComponent {
  spinner: boolean = false;
  studentsRetrieved: Array<StudentInstrumentProjection> = [];
  static attendanceCalendar: Calendar;
  asistenciaForm!: FormGroup;
  displayedColumns: string[] = ['nombre', 'codigo', 'asistencia'];
  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private studentParticipationService: StudentParticipationService,
    private utilService: UtilService
  ) {
    this.asistenciaForm = this.formBuilder.group({});
  }

  get staticAttendanceCalendar() {
    return AsistenciaComponent.attendanceCalendar;
  }

  toggleAttendance(checked: boolean, index: number) {
    this.studentsRetrieved[index].asistencia = checked;
  }

  getAllStudents(period: number): void {
    this.spinner = true;
    let bodyRequest: object = {
      period: period,
    };
    this.studentService.getBestStudentsByInstrument(bodyRequest).subscribe({
      next: (resp: any) => {
        this.studentsRetrieved = resp.data.bestStudentsByInstrumentProjections;
        this.studentsRetrieved.forEach((element) => {
          element.asistencia = false;
        });
        this.spinner = false;
        this.utilService.showToast('Estudiantes consultados exitosamente');
      },
      error: (error: any) => {
        if (error.status == 404) {
          this.utilService.showToast(error.error.message);
        } else {
          this.utilService.showToast('Error consultando estudiantes');
          console.error(error);
        }
        this.spinner = false;
      },
    });
  }

  saveAttendance(): void {
    this.spinner = true;
    let bodyRequest: object = {
      calendar: this.staticAttendanceCalendar,
      attendances: this.studentsRetrieved
    }
    this.studentParticipationService.saveAttendances(bodyRequest).subscribe({
      next: (resp: any) => {
        this.spinner = false;
        this.utilService.showToast('Asistencias guardadas exitosamente');
      },
      error: (error: any) => {
        if (error.status == 404) {
          this.utilService.showToast(error.error.message);
        } else {
          this.utilService.showToast('Error guardando asistencias');
          console.error(error);
        }
        this.spinner = false;
      },
    });
  }
  
}
