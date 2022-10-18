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
  API_URI = 'localhost:3000/api/v1';
  tokenSubject = new BehaviorSubject(false);
  private token: any;
  constructor(private httpClient: HttpClient) { }

  register(user: TokenUsuarios): Observable<JwtTokenU>{
    return this.httpClient.post<JwtTokenU>(`${this.API_URI}/autenticacion`,user).pipe(tap(
      (res : JwtTokenU) => {
        if(res){
          //guardar token
          this.saveToken(res.dataUser.accesToken, res.dataUser.expiresIn);
        }
      })
    );
  }

  private saveToken(token:string, expireIn: string):void{
    localStorage.setItem("Access_Token", token);
    localStorage.setItem("Expires_In", expireIn);
    this.token = token;
  }

  private getToken(){
    if(!this.token){
      this.token=localStorage.getItem("Acces_Token");
    }
    return this.token;
  }
}
