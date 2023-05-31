import { Component } from '@angular/core';
import { StudentService } from 'src/app/modules/dashboard/services/student/student.service';
import { UtilService } from 'src/app/modules/dashboard/services/util/util.service';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-liquidarestudiante',
  templateUrl: './liquidarestudiante.component.html',
  styleUrls: ['./liquidarestudiante.component.scss'],
})
export class LiquidarestudianteComponent {
  constructor(
    private studentService: StudentService,
    private utilService: UtilService
  ) {}

  spinner: boolean = false;
  period: number | null = null;

  setPeriod(period: number) {
    this.period = period;
  }

  liquidarViaticos() {
    let bodyRequest: object = {
      period: this.period,
    };
    this.studentService.getViaticAttendanceHoursByPeriod(bodyRequest).subscribe({
      next: (resp: any) => {
        let retrievedHours = resp.data.hours;
        this.utilService.showToast('Lista de liquidación generada exitosamente');
        const doc:jsPDF = new jsPDF();
        doc.table(0, 0, retrievedHours, ['nombre', 'codigo', 'correo', 'facultad', 'horas'], { autoSize: false, margins: 0, fontSize: 10 });
        doc.save("LiquidaciónHorasViáticos.pdf");
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }

  liquidarElectivas() {
    let bodyRequest: object = {
      period: this.period,
    };
    this.studentService.getElectiveAttendanceHoursByPeriod(bodyRequest).subscribe({
      next: (resp: any) => {
        let retrievedHours = resp.data.hours;
        this.utilService.showToast('Lista de liquidación generada exitosamente');
        const doc:jsPDF = new jsPDF();
        doc.table(0, 0, retrievedHours, ['nombre', 'codigo', 'correo', 'facultad', 'horas'], { autoSize: false, margins: 0, fontSize: 10 });
        doc.save("LiquidaciónHorasViáticos.pdf");
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }
}
