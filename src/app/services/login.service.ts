import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_URI = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) { }

  logIn(user: Object){
    return this.http.post(`${this.API_URI}/login`, user);
  }
}
