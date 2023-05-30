import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { StudentParticipationRoutes } from '../../util/enums/routes/studentParticipation';

@Injectable({
  providedIn: 'root'
})
export class StudentParticipationService {

  api_url: String = environment.api_url;

  constructor(
    private http: HttpClient
  ) { }

  saveAttendances(body: Object) {
    return this.http.post(`${this.api_url}${StudentParticipationRoutes.BASE}${StudentParticipationRoutes.SAVE_ATTENDANCES}`, body);
  }

}
