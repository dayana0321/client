import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'

//Interfaces
import {Paises} from '../models/Paises'
import { Observable } from 'rxjs';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization':
  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9zY2FyIiwiaWF0IjoxNjY1Nzk4NDA2LCJleHAiOjE2NjgzOTA0MDZ9.d-jd3vC8CGPwQv0JhYwL-EZUKnogYrI5WB7KHw2mEtw`

});

//const requestOptions = { headers: headers };

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  API_URI = 'http://localhost:3000/api/v1'

  constructor(private http: HttpClient) { }

  getPaises(){
    return this.http.get(`${this.API_URI}/paises`, {headers: headers});
  }

  getPais(id:string){
    return this.http.get(`${this.API_URI}/paises/${id}`);
  }

  savePais(pais: Object){
    return this.http.post(`${this.API_URI}/paises`, pais);
  }

  deletePais(id:string){
    return this.http.delete(`${this.API_URI}/paises/${id}`);
  }

  updatePais(id:string, updatedPais:Paises): Observable<Paises>{
    return this.http.put(`${this.API_URI}/paises/${id}`, updatedPais);
  }
}
