import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
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
export class TbposicionesService {
  API_URI = 'http://localhost:3000/api/v1'

  constructor(private http:HttpClient) { }

  getTbposiciones(){
    return this.http.get(`${this.API_URI}/tbposiciones`, {headers: headers});
  }

  getTbposicion(id:string){
    return this.http.get(`${this.API_URI}/tbposiciones/pais/${id}`, {headers: headers});
  }

  SaveTbposiciones(resultado: Object){
    return this.http.post(`${this.API_URI}/tbposiciones`, resultado, {headers:header});
  }

  deleteTbposiciones(id:string){
    return this.http.delete(`${this.API_URI}/tbposiciones/${id}`, {headers: header});
  }

  updateTbposiciones(id:string, updatedPais:Object){
    return this.http.put(`${this.API_URI}/tbposiciones/${id}`, updatedPais, {headers:header} );
  }
}
