import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteViviendaService {

  constructor(private http: HttpClient) { }

  deleteVivienda(idVivienda: string): any {
    const url = `https://crud-angular-springboot-production.up.railway.app/api/eliminarvivienda/${idVivienda}`;
    return this.http.delete(url);
  }
}
