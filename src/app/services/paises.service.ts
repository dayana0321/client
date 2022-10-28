import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'

//Interfaces
import {Paises} from '../models/Paises'
import { Observable } from 'rxjs';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization':
  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkRhaW5hMiIsImlhdCI6MTY2NjQ1MjU3NiwiZXhwIjoxNjY5MDQ0NTc2fQ.FXouHuO4lsGC5YjrsgLxiktkZBdPLLwEvL7ROZmqLmg`

});
const token = localStorage.getItem('token')

const header = new HttpHeaders({
  
  'Authorization': `${token}`

});

console.log(header);
//header.append('Authorization', localStorage.getItem('token'))

//const requestOptions = { headers: headers };

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  API_URI = 'http://localhost:3000/api/v1'
  //API_URI = 'https://mundialapi.herokuapp.com/api/v1/'

  constructor(private http: HttpClient) { }

  getPaises(){
    return this.http.get(`${this.API_URI}/paises`, {headers: headers});
  }

  getPais(id:string){
    return this.http.get(`${this.API_URI}/paises/${id}`, {headers: headers});
  }

  getOnePais(id:string){
    return this.http.get(`${this.API_URI}/paises/pais/${id}`, {headers: headers});
  }

  savePais(pais: Object){
    return this.http.post(`${this.API_URI}/paises`, pais, {headers:header});
  }

  deletePais(id:string){
    return this.http.delete(`${this.API_URI}/paises/${id}`, {headers: header});
  }

  updatePais(id:string, updatedPais:Object){
    return this.http.put(`${this.API_URI}/paises/${id}`, updatedPais, {headers:header} );
  }
}
