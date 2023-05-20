import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { DocumentType } from '../../util/interfaces/documentType';
import { DocumentTypeRoutes } from '../../util/enums/routes/documentType';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {

  api_url: String = environment.api_url;

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<DocumentType>(`${this.api_url}${DocumentTypeRoutes.BASE}${DocumentTypeRoutes.GET_ALL}`);
  }

}
