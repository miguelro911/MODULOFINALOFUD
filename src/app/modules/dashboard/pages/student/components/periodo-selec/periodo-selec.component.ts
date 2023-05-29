import { Component, EventEmitter, Output } from '@angular/core';
import { PeriodService } from 'src/app/modules/dashboard/services/period/period.service';
import { UtilService } from 'src/app/modules/dashboard/services/util/util.service';
import { Period } from 'src/app/modules/dashboard/util/interfaces/period';

@Component({
  selector: 'app-periodo-selec',
  templateUrl: './periodo-selec.component.html',
  styleUrls: ['./periodo-selec.component.scss']
})
export class PeriodoSelecComponent {

  @Output() event: EventEmitter<any> = new EventEmitter();

  spinner: boolean = false;
  static selectedPeriod: any;
  periodsRetrieved: Array<Period> = [];

  constructor(
    private periodService: PeriodService,
    private utilService: UtilService,
  ) {
    PeriodoSelecComponent.selectedPeriod = null;
    this.getAllPeriods();
  }

  get staticSelectedPeriod() {
    return PeriodoSelecComponent.selectedPeriod;
  }

  set staticSelectedPeriod(period: any) {
    PeriodoSelecComponent.selectedPeriod = period;
  }

  getAllPeriods(): void {
    this.spinner = true;
    this.periodService.getAll().subscribe(
      {
        next: (resp: any) => {
          this.periodsRetrieved = resp.data.periods;
          this.spinner = false;
          this.utilService.showToast("Periodos consultados exitosamente");
        },
        error: (error: any) => {
          if(error.status == 404) {
            this.utilService.showToast(error.error.message);
          } else {
            this.utilService.showToast("Error consultando periodos");
            console.error(error);
          }
          this.spinner = false;
        }
      }
    );
  }

  changeHandler(period: number): void {
    this.event.emit(period);
  }

}
