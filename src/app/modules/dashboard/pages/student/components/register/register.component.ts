import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CurriculumProjectService } from 'src/app/modules/dashboard/services/curriculumProject/curriculum-project.service';
import { DocumentTypeService } from 'src/app/modules/dashboard/services/documentType/document-type.service';
import { StudentService } from 'src/app/modules/dashboard/services/student/student.service';
import { UtilService } from 'src/app/modules/dashboard/services/util/util.service';
import { CurriculumProject } from 'src/app/modules/dashboard/util/interfaces/curriculumProyect';
import { Student } from 'src/app/modules/dashboard/util/interfaces/student';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private studentService: StudentService,
    private curriculumProjectService: CurriculumProjectService,
    private documentTypeService: DocumentTypeService,
    protected utilService: UtilService
  ) {
    this.getRequiredData();
  }

  spinner: boolean = false;
  retrievedCurriculumProyects: Array<CurriculumProject> = [];
  retrievedDocumentTypes: Array<CurriculumProject> = [];
  toRegisterStudent: Student = {
    id: null,
    name: '',
    lastName: '',
    birthDate: null,
    cellPhone: null,
    code: null,
    document: '',
    personalMail: '',
    instituteMail: '',
    proyectId: null,
    documentTypeId: null
  }

  getRequiredData(): void {
    this.spinner = true;
    this.curriculumProjectService.getAll().subscribe(
      {
        next: (resp: any) => {
          this.retrievedCurriculumProyects = resp.data.curriculumProjectEntityList;
          this.documentTypeService.getAll().subscribe(
            {
              next: (resp: any) => {
                this.retrievedDocumentTypes = resp.data.documentTypeEntityList;
                this.spinner = false;
              },
              error: (error: any) => {
                if (error.status == 404) {
                  this.utilService.showToast(error.error.message);
                } else {
                  this.utilService.showToast("Error consultando tipos de documento");
                  console.error(error);
                }
                this.spinner = false;
              }
            }
          );
        },
        error: (error: any) => {
          if (error.status == 404) {
            this.utilService.showToast(error.error.message);
          } else {
            this.utilService.showToast("Error consultando proyectos curriculares");
            console.error(error);
          }
          this.spinner = false;
        }
      }
    );
  }

  registerStudent(): void {
    this.spinner = true;
    this.studentService.register(this.toRegisterStudent).subscribe(
      {
        next: (resp: any) => {
          this.utilService.showToast(`Estudiante registrado exitosamente con el id ${resp.data.id}`);
          this.toRegisterStudent = {
            id: null,
            name: '',
            lastName: '',
            birthDate: null,
            cellPhone: null,
            code: null,
            document: '',
            personalMail: '',
            instituteMail: '',
            proyectId: null,
            documentTypeId: null
          }
          this.setFormFieldsClean();
          this.spinner = false;
        },
        error: (error: any) => {
          this.utilService.showToast("Error registrando estudiante");
          this.spinner = false;
          console.error(error);
        }
      }
    );
  }

  setFormFieldsClean() {
    this.formControl_name.markAsUntouched();
    this.formControl_lastName.markAsUntouched();
    this.formControl_documentType.markAsUntouched();
    this.formControl_document.markAsUntouched();
    this.formControl_birthDate.markAsUntouched();
    this.formControl_code.markAsUntouched();
    this.formControl_personalMail.markAsUntouched();
    this.formControl_instituteMail.markAsUntouched();
    this.formControl_cellPhone.markAsUntouched();
    this.formControl_curriculumProject.markAsUntouched();
  }

  areValidFields(): boolean {
    return this.formControl_name.errors == null
      && this.formControl_lastName.errors == null
      && this.formControl_documentType.errors == null
      && this.formControl_document.errors == null
      && this.formControl_birthDate.errors == null
      && this.formControl_code.errors == null
      && this.formControl_personalMail.errors == null
      && this.formControl_instituteMail.errors == null
      && this.formControl_cellPhone.errors == null
      && this.formControl_curriculumProject.errors == null;
  }

  formControl_name = new FormControl('', [Validators.required, Validators.maxLength(25)]);
  formControl_lastName = new FormControl('', [Validators.required, Validators.maxLength(25)]);
  formControl_documentType = new FormControl('', [Validators.required]);
  formControl_document = new FormControl('', [Validators.required, Validators.maxLength(25)]);
  formControl_birthDate = new FormControl('', [Validators.required]);
  birthDateYearFilter = (d: Date | null): boolean => {
    const year = (d || new Date()).getFullYear();
    const month = (d || new Date()).getMonth();
    return month < new Date().getMonth() || year < new Date().getFullYear();
  };
  formControl_code = new FormControl('', [Validators.required, Validators.maxLength(25)]);
  formControl_personalMail = new FormControl('', [Validators.required, Validators.email, Validators.maxLength(25)]);
  formControl_instituteMail = new FormControl('', [Validators.required, Validators.email, Validators.maxLength(25)]);
  formControl_cellPhone = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(25)]);
  formControl_curriculumProject = new FormControl('', [Validators.required]);

}
