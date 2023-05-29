import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../../util/interfaces/student';
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
}
