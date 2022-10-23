import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarioL={
    nombre_usuario:'',
    pass_usuario:''
  }
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  getUserL(){
    console.log(this.usuarioL);
    this.loginService.logIn(this.usuarioL).subscribe((res:any) => {
      console.log('Prueba',res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['paises']);
    })
  }
}
