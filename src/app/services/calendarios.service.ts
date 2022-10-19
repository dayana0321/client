import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'

import {Calendarios} from '../models/Calendarios'
import { Observable } from 'rxjs';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization':
  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9zY2FyIiwiaWF0IjoxNjY1Nzk4NDA2LCJleHAiOjE2NjgzOTA0MDZ9.d-jd3vC8CGPwQv0JhYwL-EZUKnogYrI5WB7KHw2mEtw`

});


@Injectable({
  providedIn: 'root'
})
export class CalendariosService {
  API_URI = 'http://localhost:3000/api/v1'
  constructor(private http: HttpClient) { }

  getCalendarios(){
    return this.http.get(`${this.API_URI}/calendario`,{headers: headers});
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
