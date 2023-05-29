import { Component } from '@angular/core';
import { Calendar as CalendarType } from 'src/app/modules/dashboard/util/interfaces/calendar';
import { UtilService } from 'src/app/modules/dashboard/services/util/util.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarService } from 'src/app/modules/dashboard/services/calendar/calendar.service';
import { CalendarOptions } from '@fullcalendar/core';
import { PeriodoSelecComponent } from '../periodo-selec/periodo-selec.component';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
})
export class CalendarioComponent {
  spinner: boolean = false;
  activitiesRetrieved: Array<CalendarType> = [];
  displayDates: Array<Object> = [];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };

  constructor(
    private calendarService: CalendarService,
    private utilService: UtilService
  ) {}

  getActivitiesByPeriod(period: number): void {
    this.spinner = true;
    let bodyRequest: object = {
      period: period,
    };
    this.calendarService.getAllByPeriod(bodyRequest).subscribe({
      next: (resp: any) => {
        this.activitiesRetrieved = resp.data.calendars;
        this.spinner = false;
        this.utilService.showToast(
          'Actividades por periodo consultados exitosamente'
        );
        this.displayDates = this.activitiesRetrieved.map(
          (activity: CalendarType) => {
            return {
              title: this.utilService.getCalendarType(activity.idtipocalen),
              start: new Date(activity.fechainicio),
              end: new Date(activity.fechafin),
              allDay: false,
            };
          }
        );
      },
      error: (error: any) => {
        if (error.status == 404) {
          this.utilService.showToast(error.error.message);
        } else {
          this.utilService.showToast(
            'Error consultando actividades por periodo'
          );
          console.error(error);
        }
        this.spinner = false;
      },
    });
  }

  finishPlanificationCalendar(): void {
    this.spinner = true;
    let bodyRequest: object = {
      period: PeriodoSelecComponent.selectedPeriod,
    };
    this.calendarService.finishPlanificationCalendarByPeriod(bodyRequest).subscribe({
      next: (resp: any) => {
        this.spinner = false;
        this.utilService.showToast('Calendario de planeación terminado exitosamente');
      },
      error: (error: any) => {
        if (error.status == 404) {
          this.utilService.showToast(error.error.message);
        } else {
          this.utilService.showToast('Error terminando calendario de planeación');
          console.error(error);
        }
        this.spinner = false;
      },
    });
  }
}
