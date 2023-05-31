import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CalendarService } from 'src/app/modules/dashboard/services/calendar/calendar.service';
import { TheaterPlayService } from 'src/app/modules/dashboard/services/theaterPlay/theater-play.service';
import { UtilService } from 'src/app/modules/dashboard/services/util/util.service';
import { TheaterPlay } from 'src/app/modules/dashboard/util/interfaces/theaterPlay';
import { CalendarType } from 'src/app/modules/dashboard/util/interfaces/calendarType';

@Component({
  selector: 'app-crearevento',
  templateUrl: './crearevento.component.html',
  styleUrls: ['./crearevento.component.scss'],
})
export class CreareventoComponent {
  constructor(
    private calendarService: CalendarService,
    private theaterPlayService: TheaterPlayService,
    public utilService: UtilService
  ) {}

  spinner: boolean = false;

  theaterPlays: TheaterPlay[] = [];
  calendarTypes: CalendarType[] = [];

  selectedCalendar: string = '';
  selectedTheaterPlay: string = '';
  startDate: string = '';
  endDate: string = '';

  getRequiredData(period: number) {
    let bodyRequest: object = {
      period: period,
    };
    this.calendarService.getAllTypes().subscribe({
      next: (resp: any) => {
        this.calendarTypes = resp.data.types;
        this.theaterPlayService.getAllByPeriod(bodyRequest).subscribe({
          next: (resp: any) => {
            this.theaterPlays = [resp.data.theaterPlayEntity];
          },
          error: (error: any) => {
            console.error(error);
            this.theaterPlays = [];
          },
        });
      },
      error: (error: any) => {
        console.error(error);
        this.calendarTypes = [];
      },
    });
  }

  createEvent() {
    let bodyRequest: object = {
      idtipocalen: this.selectedCalendar,
      idobra: this.selectedTheaterPlay,
      fechainicio: this.startDate,
      fechafin: this.endDate,
    };
    this.calendarService.createCalendar(bodyRequest).subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.setUntouchedFields();
        this.utilService.showToast('Calendario creado exitosamente');
      },
      error: (error: any) => {
        console.error(error);
        this.setUntouchedFields();
        this.utilService.showToast('Error creando calendario');
      },
    });
  }

  setUntouchedFields(): void {
    this.selectedCalendar = '';
    this.selectedTheaterPlay = '';
    this.startDate = '';
    this.endDate = '';
    this.formControl_calendarType.markAsUntouched();
    this.formControl_theaterPlay.markAsUntouched();
    this.formControl_startDate.markAsUntouched();
    this.formControl_finishDate.markAsUntouched();
  }

  areValidFields(): boolean {
    return (
      this.formControl_calendarType.errors == null &&
      this.formControl_theaterPlay.errors == null &&
      this.formControl_startDate.errors == null &&
      this.formControl_finishDate.errors == null
    );
  }

  formControl_calendarType = new FormControl('', [Validators.required]);
  formControl_theaterPlay = new FormControl('', [Validators.required]);
  formControl_startDate = new FormControl('', [Validators.required]);
  formControl_finishDate = new FormControl('', [Validators.required]);
}
