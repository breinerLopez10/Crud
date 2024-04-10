import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeletePersonaService {

  constructor(private http: HttpClient) { }

  deletePersona(idDocumento: string): any {
    const url = `https://crud-angular-springboot-production.up.railway.app/api/eliminarpersona/${idDocumento}`;
    return this.http.delete(url);
  }
}
