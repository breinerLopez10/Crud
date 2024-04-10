import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateVehiculoService {

  constructor(private http: HttpClient) { }

  putVehiculo(data: any): any {
    const url = `https://crud-angular-springboot-production.up.railway.app/api/vehiculos/${data.idVehiculo}/${data.idPropietario}`;
    return this.http.put(url, data);
  }
}
