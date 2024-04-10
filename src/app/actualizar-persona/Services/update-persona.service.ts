import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdatePersonaService {

  constructor(private http: HttpClient) { }

  putPersona(data: any): any {
    const url = `https://crud-angular-springboot-production.up.railway.app/api/personas/${data.idDocumento}/${data.vivienda}/${data.cabezaFamilia}`;
    return this.http.put(url, data);
  }
}
