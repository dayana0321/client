import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

//Interfaces
import {Estadios} from '../models/Estadios'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadiosService {
  API_URI = 'http://localhost:3000/api/v1'

  constructor(private http: HttpClient) { }

  getEstadios(){
    return this.http.get(`${this.API_URI}/estadios`);
  }

  getEstadio(id:string){
    return this.http.get(`${this.API_URI}/estadios/${id}`);
  }

  saveEstadio(estadio: Estadios){
    return this.http.post(`${this.API_URI}/estadios`, estadio);
  }

  deleteEstadio(id:string){
    return this.http.delete(`${this.API_URI}/estadios/${id}`);
  }

  updateEstadio(id:string, updatedEstadio:Estadios): Observable<Estadios>{
    return this.http.put(`${this.API_URI}/estadios/${id}`, updatedEstadio);
  }
}
