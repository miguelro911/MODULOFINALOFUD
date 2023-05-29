import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { EmployeeRoutes } from '../../util/enums/routes/employee';
import { Employee } from '../../util/interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoServiceService {

  api_url: String = environment.api_url;

  constructor(
    private http: HttpClient
  ) { }

  login(email: String) {
    return this.http.post(`${this.api_url}${EmployeeRoutes.BASE}${EmployeeRoutes.LOGIN}`, email);
  }

  register(employee: Employee) {
    return this.http.post(`${this.api_url}${EmployeeRoutes.BASE}${EmployeeRoutes.REGISTER}`, employee);
  }

}
