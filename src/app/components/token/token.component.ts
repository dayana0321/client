import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TokenService} from '../../services/token.service'
import {TokenUsuarios} from '../../models/TokenUsuarios'
@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {
  usuario = {
    nombre: '',
    correo: ''
  }
  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
  }

  getUsuario(){
    console.log(this.usuario);
    this.tokenService.getToken(this.usuario)
    .subscribe(
      res => {
        console.log(res);
        alert('Tu token ha sido enviado a tu correo electrónico :)')
      },
      err => console.error(err)
    )
  }



}
