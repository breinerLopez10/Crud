import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteEventoService {

  constructor(private http: HttpClient) { }

  deleteEvento(idEvento: string): any {
    const url = `https://crud-angular-springboot-production.up.railway.app/api/eliminarevento/${idEvento}`;
    return this.http.delete(url);
  }
}
