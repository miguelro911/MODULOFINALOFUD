import { Component } from '@angular/core';
import { StudentService } from 'src/app/modules/dashboard/services/student/student.service';
import { UtilService } from 'src/app/modules/dashboard/services/util/util.service';
import { Student } from 'src/app/modules/dashboard/util/interfaces/student';

const COLUMNS = [
  { name: 'id', label: 'Id' },
  { name: 'name', label: 'Nombre' },
  { name: 'lastName', label: 'Apellido' },
  { name: 'document', label: 'Documento' },
  { name: 'birthDate', label: 'Fecha de nacimiento' },
  { name: 'code', label: 'Código' },
  { name: 'personalMail', label: 'Correo personal' },
  { name: 'instituteMail', label: 'Correo institucional' },
  { name: 'cellPhone', label: 'Teléfono' },
]

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.scss']
})
export class ListAllComponent {

  spinner: boolean = false;
  studentsRetrieved: Array<Student> = [];

  constructor(
    private studentService: StudentService,
    private utilService: UtilService
  ) {
    this.getAllStudents();
  }

  getAllStudents(): void {
    this.spinner = true;
    this.studentService.getAll().subscribe(
      {
        next: (resp: any) => {
          this.studentsRetrieved = resp.data.studentEntityList;
          this.spinner = false;
          this.utilService.showToast("Estudiantes consultados exitosamente");
        },
        error: (error: any) => {
          if(error.status == 404) {
            this.utilService.showToast(error.error.message);
          } else {
            this.utilService.showToast("Error consultando estudiantes");
            console.error(error);
          }
          this.spinner = false;
        }
      }
    );
  }

  displayed_columns: Array<string> = COLUMNS.map(column => column.name);
  columns_schema: any = COLUMNS;

}
