import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'

import {Calendarios} from '../models/Calendarios'
import { Observable } from 'rxjs';

function adminHeader() {
  const token = localStorage.getItem('token')
  return new HttpHeaders({
    'Authorization': `${token}`
  });
}

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization':
  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkRhaW5hMiIsImlhdCI6MTY2NjQ1MjU3NiwiZXhwIjoxNjY5MDQ0NTc2fQ.FXouHuO4lsGC5YjrsgLxiktkZBdPLLwEvL7ROZmqLmg`
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
    return this.http.post(`${this.API_URI}/calendario`, calendario, {headers:adminHeader()});
  }

  deleteCalendario(id:string){
    return this.http.delete(`${this.API_URI}/calendario/${id}`, {headers:adminHeader()});
  }

  updateCalendario(id:string, updatedCalendario:Object){
    return this.http.put(`${this.API_URI}/calendario/${id}`, updatedCalendario,  {headers:adminHeader()});
  }
}
