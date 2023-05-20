import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { CurriculumProject } from '../../util/interfaces/curriculumProyect';
import { CurriculumnProjectRoutes } from '../../util/enums/routes/curriculumProject';

@Injectable({
  providedIn: 'root'
})
export class CurriculumProjectService {

  api_url: String = environment.api_url;

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<CurriculumProject>(`${this.api_url}${CurriculumnProjectRoutes.BASE}${CurriculumnProjectRoutes.GET_ALL}`);
  }

  
}
