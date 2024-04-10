import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrarUsuarioService {

  constructor(private http: HttpClient) { }

  postPersona(data: any): Observable<any> {
    const url = `https://crud-angular-springboot-production.up.railway.app/api/crearpersona/${data.vivienda}/${data.cabezaFamilia}`;
    return this.http.post(url, data);
  }
}
