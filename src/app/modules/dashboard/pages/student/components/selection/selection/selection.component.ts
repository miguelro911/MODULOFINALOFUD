import { Component } from '@angular/core';
import { StudentService } from 'src/app/modules/dashboard/services/student/student.service';
import { UtilService } from 'src/app/modules/dashboard/services/util/util.service';
import { PeriodoSelecComponent } from '../../periodo-selec/periodo-selec.component';
import { StudentInstrumentProjection } from 'src/app/modules/dashboard/util/interfaces/studentInstrumentProjection';

const COLUMNS = [
  { name: 'nombre', label: 'Nombre' },
  { name: 'apellido', label: 'Apellido' },
  { name: 'codigo', label: 'Código' },
  { name: 'facultad', label: 'Facultad' },
  { name: 'proyecto', label: 'Proyecto' },
  { name: 'instrumento', label: 'Instrumento' }
];

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss'],
})
export class SelectionComponent {
  spinner: boolean = false;
  showButton: boolean = false;
  studentsRetrieved: Array<StudentInstrumentProjection> = [];

  constructor(
    private studentService: StudentService,
    private utilService: UtilService
  ) {}

  showConfirmButton(): void {
    this.showButton = true;
  }

  getAllStudents(): void {
    this.showButton = false;
    this.spinner = true;
    let bodyRequest: object = {
      period: PeriodoSelecComponent.selectedPeriod,
    };
    this.studentService.getBestStudentsByInstrument(bodyRequest).subscribe({
      next: (resp: any) => {
        this.studentsRetrieved = resp.data.bestStudentsByInstrumentProjections;
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

  displayed_columns: Array<string> = COLUMNS.map((column) => column.name);
  columns_schema: any = COLUMNS;
}
