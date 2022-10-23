import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importar componentes
import {PaisListComponent} from './components/pais-list/pais-list.component'
import {EstadiosListComponent} from './components/estadios-list/estadios-list.component'
import {CalendarioListComponent} from './components/calendario-list/calendario-list.component'
import {TokenComponent} from './components/token/token.component'
import {PaisFormComponent} from './components/pais-form/pais-form.component'
import {EstadiosFormComponent} from './components/estadios-form/estadios-form.component'
import {HomeComponent} from './components/home/home.component'
import {LoginComponent} from './components/login/login.component'

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'paises',
    component:PaisListComponent
  },
  {
    path:'estadios',
    component:EstadiosListComponent
  },
  {
    path: 'calendario',
    component:CalendarioListComponent
  },
  {
    path: 'token',
    component:TokenComponent
  },
  {
    path: 'paises/add',
    component:PaisFormComponent
  },
  {
    path: 'estadios/add',
    component: EstadiosFormComponent
  },
  {
    path: 'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
