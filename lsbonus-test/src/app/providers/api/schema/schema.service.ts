import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment/environment';
import { ISchemaRequest } from '../../../models/ISchemaRequest';

@Injectable({providedIn: 'root'})
export class SchemaService {
  private http: HttpClient = inject(HttpClient);

  getSchema$(): Observable<ISchemaRequest> {
    return this.http.post<ISchemaRequest>(`${environment.apiBase}/schema/test`, {});
  }
}
