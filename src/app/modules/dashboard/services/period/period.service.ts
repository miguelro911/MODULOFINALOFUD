import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { periodRoutes } from '../../util/enums/routes/period';

@Injectable({
  providedIn: 'root'
})
export class PeriodService {

  api_url: String = environment.api_url;

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(`${this.api_url}${periodRoutes.BASE}${periodRoutes.GET_ALL}`);
  }

}
