import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPersonaEventoService {

  constructor(private http: HttpClient) { }

  addPersonaEvento(idDocumento: string, idEvento: string, data: any): Observable<any> {
    const url = `https://crud-angular-springboot-production.up.railway.app/api/personas/eventos/${idDocumento}/${idEvento}`;
    return this.http.put(url, data);
  }
}
