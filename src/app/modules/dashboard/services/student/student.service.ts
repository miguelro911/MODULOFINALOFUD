import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { StudentRoutes } from '../../util/enums/routes/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  api_url: String = environment.api_url;

  constructor(
    private http: HttpClient
  ) { }

  getBestStudentsByInstrument(body: Object) {
    return this.http.post(`${this.api_url}${StudentRoutes.BASE}${StudentRoutes.GET_BEST_BY_INSTRUMENT}`, body);
  }

  getBestStudentsByInstrumentAndSaveAttendance(body: Object) {
    return this.http.post(`${this.api_url}${StudentRoutes.BASE}${StudentRoutes.GET_BEST_BY_INSTRUMENT_AND_SAVE_ATTENDANCE}`, body);
  }

  getViaticAttendanceHoursByPeriod(body: Object) {
    return this.http.post(`${this.api_url}${StudentRoutes.BASE}${StudentRoutes.GET_VIATIC_ATTENDANCE_HOURS_BY_PERIOD}`, body);
  }

  getElectiveAttendanceHoursByPeriod(body: Object) {
    return this.http.post(`${this.api_url}${StudentRoutes.BASE}${StudentRoutes.GET_ELECTIVE_ATTENDANCE_HOURS_BY_PERIOD}`, body);
  }

}
