import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CalendarService } from '../services/calendar/calendar.service';
import { UtilService } from '../services/util/util.service';
import { Calendar } from '../util/interfaces/calendar';
import { AsistenciaComponent } from '../pages/student/components/asistencia/asistencia.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  planningCalendar: Array<Calendar> = [];
  callCalendar: Array<Calendar> = [];
  selectionCalendar: Array<Calendar> = [];
  rehearsalCalendars: Array<Calendar> = [];
  playCalendars: Array<Calendar> = [];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private calendarService: CalendarService,
    public utilService: UtilService
  ) {
    this.getActivitiesByPeriod(202301);
  }

  getActivitiesByPeriod(period: number): void {
    let bodyRequest: object = {
      period: period,
    };
    this.calendarService.getAllByPeriod(bodyRequest).subscribe({
      next: (resp: any) => {
        let activitiesRetrieved = resp.data.calendars;
        this.planningCalendar = this.utilService.getCalendarsByType(activitiesRetrieved, '1');
        this.callCalendar = this.utilService.getCalendarsByType(activitiesRetrieved, '2');
        this.selectionCalendar = this.utilService.getCalendarsByType(activitiesRetrieved, '3');
        this.rehearsalCalendars = this.utilService.getCalendarsByType(activitiesRetrieved, '4');
        this.playCalendars = this.utilService.getCalendarsByType(activitiesRetrieved, '5');
      },
      error: (error: any) => {
        if (error.status == 404) {
          this.utilService.showToast(error.error.message);
        } else {
          console.error(error);
        }
      },
    });
  }

  calendarRenderCondition(): boolean {
    return ((this.planningCalendar?.length == 0 &&
      this.callCalendar?.length == 0 &&
      this.selectionCalendar?.length == 0 &&
      this.rehearsalCalendars?.length == 0 &&
      this.playCalendars?.length == 0) || this.planningCalendar[0]?.idestado == 'ACTIVO');
  }

  selectionRenderCondition(): boolean {
    return(this.selectionCalendar[0]?.idestado == 'INACTIVO');
  }

  attendanceRenderCondition(): boolean {
    let currentDate = new Date();
    let currentActivities: Array<Calendar> = this.rehearsalCalendars.filter((calendar) => {
      let startDate = new Date(new Date(calendar.fechainicio));
      let endDate = new Date(new Date(calendar.fechafin));
      return (startDate <= currentDate && currentDate <= endDate);
    });
    AsistenciaComponent.attendanceCalendar = currentActivities[0];
    return currentActivities.length != 0;
  }

}
