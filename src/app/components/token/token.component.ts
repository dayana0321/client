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

  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
  }

  onRegister(form: { value: any; }): void{
    this.tokenService.register(form.value).subscribe(res =>{
      console.log('Token creado');
    })
  }

}
