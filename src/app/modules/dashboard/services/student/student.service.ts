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

  getAll() {
    return this.http.get<Student>(`${this.api_url}${StudentRoutes.BASE}${StudentRoutes.GET_ALL}`);
  }

  register(student: Student) {
    return this.http.post(`${this.api_url}${StudentRoutes.BASE}${StudentRoutes.REGISTER}`, student);
  }
  
}
