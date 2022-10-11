import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

//Interfaces
import {Paises} from '../models/Paises'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  API_URI = 'http://localhost:3000/api/v1'

  constructor(private http: HttpClient) { }

  getPaises(){
    return this.http.get(`${this.API_URI}/paises`);
  }

  getPais(id:string){
    return this.http.get(`${this.API_URI}/paises/${id}`);
  }

  savePais(pais: Paises){
    return this.http.post(`${this.API_URI}/paises`, pais);
  }

  deletePais(id:string){
    return this.http.delete(`${this.API_URI}/paises/${id}`);
  }

  updatePais(id:string, updatedPais:Paises): Observable<Paises>{
    return this.http.put(`${this.API_URI}/paises/${id}`, updatedPais);
  }
}
