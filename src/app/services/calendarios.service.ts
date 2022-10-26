import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'

import {Calendarios} from '../models/Calendarios'
import { Observable } from 'rxjs';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization':
  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkRhaW5hMiIsImlhdCI6MTY2NjQ1MjU3NiwiZXhwIjoxNjY5MDQ0NTc2fQ.FXouHuO4lsGC5YjrsgLxiktkZBdPLLwEvL7ROZmqLmg`

});

const token = localStorage.getItem('token')

const header = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `${token}`

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
    return this.http.get(`${this.API_URI}/calendario/fecha/${id}`, {headers: headers});
  }

  saveCalendarios(calendario:Object){
    return this.http.post(`${this.API_URI}/calendario`, calendario, {headers:header});
  }

  deleteCalendario(id:string){
    return this.http.delete(`${this.API_URI}/calendario/${id}`, {headers: header});
  }
  updateCalendario(id:string, updatedCalendario:Object){
    return this.http.put(`${this.API_URI}/calendario/${id}`, updatedCalendario,  {headers:header});
  }
}
