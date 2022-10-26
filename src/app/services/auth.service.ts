import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jwtHelper: JwtHelperService) { }

  isAuth():boolean{
    const token = localStorage.getItem('token')
    if(!localStorage.getItem('token')){
      return false;
    }
    return true;
  }
}
