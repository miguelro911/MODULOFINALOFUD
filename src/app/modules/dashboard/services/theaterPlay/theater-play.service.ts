import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { TheaterPlayRoutes } from '../../util/enums/routes/theaterPlay';

@Injectable({
  providedIn: 'root'
})
export class TheaterPlayService {

  api_url: String = environment.api_url;

  constructor(
    private http: HttpClient
  ) { }

  getAllByPeriod(body: Object) {
    return this.http.post(`${this.api_url}${TheaterPlayRoutes.BASE}${TheaterPlayRoutes.GET_ALL_BY_PERIOD}`, body);
  }

}
