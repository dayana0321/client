import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http'

//Interfaces
import {Estadios} from '../models/Estadios'
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

export class EstadiosService {
  API_URI = 'http://localhost:3000/api/v1'

  constructor(private http: HttpClient) { }

  getEstadios(){
    return this.http.get(`${this.API_URI}/estadios`,{headers:headers});
  }

  getEstadio(id:string){
    return this.http.get(`${this.API_URI}/estadios/${id}`, {headers:headers});
  }

  saveEstadio(estadio: Object){
    return this.http.post(`${this.API_URI}/estadios`, estadio,{headers:adminHeader()});
  }

  deleteEstadio(id:string){
    return this.http.delete(`${this.API_URI}/estadios/${id}`,{headers:adminHeader()});
  }

  updateEstadio(id:string, updatedEstadio:Object){
    return this.http.put(`${this.API_URI}/estadios/${id}`, updatedEstadio,{headers:adminHeader()});
  }
}
