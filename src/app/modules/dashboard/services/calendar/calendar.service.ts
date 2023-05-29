import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Calendar } from '../../util/interfaces/calendar';
import { CalendarRoutes } from '../../util/enums/routes/calendar';

@Injectable({
  providedIn: 'root'
})
export class CalendarioServiceService {

  api_url: String = environment.api_url;

  constructor(
    private http: HttpClient
  ) { }

  getPlanificationCalendarByPeriod(body: Object) {
    return this.http.post(`${this.api_url}${CalendarRoutes.BASE}${CalendarRoutes.GET_PLANIFICATION_CALENDAR_BY_PERIOD}`, body);
  }

  finishPlanificationCalendarByPeriod(body: Object) {
    return this.http.post(`${this.api_url}${CalendarRoutes.BASE}${CalendarRoutes.FINISH_PLANIFICATION_CALENDAR}`, body);
  }

}
