import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private route: Router){}
  canActivate():boolean{
    if(!this.authService.isAuth()){
      console.log('El token no es válido o ya expiró');
      this.route.navigate(['login'])
      return false;
    }
    return true;
  }
}
