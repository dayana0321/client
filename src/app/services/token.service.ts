import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenUsuarios} from '../models/TokenUsuarios';
import {JwtTokenU} from '../models/JwtTokenU'
import {tap} from 'rxjs/operators'
import {Observable, BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  API_URI = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) { }
  getToken(usuario: Object){
    return this.http.post(`${this.API_URI}/autenticacion`, usuario);
  }
}