import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import {Calendarios} from '../models/Calendarios'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendariosService {
  API_URI = 'http://localhost:3000/api/v1'
  constructor(private http: HttpClient) { }

  getCalendarios(){
    return this.http.get(`${this.API_URI}/calendario`);
  }

  getCalendario(id:string){
    return this.http.get(`${this.API_URI}/calendario/${id}`);
  }

  saveCalendarios(calendario:Calendarios){
    return this.http.post(`${this.API_URI}/calendario`, calendario);
  }

  deleteCalendario(id:string){
    return this.http.delete(`${this.API_URI}/calendario/${id}`);
  }
  updateCalendario(id:string, updatedCalendario:Calendarios): Observable<Calendarios>{
    return this.http.put(`${this.API_URI}/paises/${id}`, updatedCalendario);
  }
}
