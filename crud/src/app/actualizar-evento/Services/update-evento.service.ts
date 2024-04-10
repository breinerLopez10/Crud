import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateEventoService {

  constructor(private http: HttpClient) { }

  putEvento(data: any): any {
    const url = `http://localhost:8180/api/eventos/${data.idEvento}/${data.lugar}`;
    return this.http.put(url, data);
  }
}
