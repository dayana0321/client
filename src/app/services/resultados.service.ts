import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';


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
export class ResultadosService {
  API_URI = 'http://localhost:3000/api/v1'
  constructor(private http:HttpClient) { }

  getResultados(){
    return this.http.get(`${this.API_URI}/resultados`, {headers: headers});
  }

  getResultado(id:string){
    return this.http.get(`${this.API_URI}/resultados/res/${id}`, {headers: headers});
  }

  saveResultado(resultado: Object){
    return this.http.post(`${this.API_URI}/resultados`, resultado, {headers:adminHeader()});
  }

  deleteResultado(id:string){
    return this.http.delete(`${this.API_URI}/resultados/${id}`, {headers:adminHeader()});
  }

  updateResultado(id:string, updatedPais:Object){
    return this.http.patch(`${this.API_URI}/resultados/${id}`, updatedPais, {headers:adminHeader()} );
  }
}

