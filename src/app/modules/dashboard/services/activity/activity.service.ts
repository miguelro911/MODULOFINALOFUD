import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Activity } from '../../util/interfaces/activity';
import { ActivityRoutes } from '../../util/enums/routes/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  api_url: String = environment.api_url;

  constructor(
    private http: HttpClient
  ) { }

  getByPeriod(body: Object) {
    return this.http.post(`${this.api_url}${ActivityRoutes.BASE}${ActivityRoutes.GET_BY_PERIOD}`, body);
  }

}
