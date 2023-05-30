import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getDataByEmail(email: string): Observable<any> {
    const url = `http://localhost:8081/employee/login?email=${encodeURIComponent(email)}`;
    return this.http.get<any>(url);
  }
}
