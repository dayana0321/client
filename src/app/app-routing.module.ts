import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importar componentes
import {PaisListComponent} from './components/pais-list/pais-list.component'
import {EstadiosListComponent} from './components/estadios-list/estadios-list.component'
import {CalendarioListComponent} from './components/calendario-list/calendario-list.component'
import {TokenComponent} from './components/token/token.component'

const routes: Routes = [
  {
    path:'',
    redirectTo: '/paises',
    pathMatch: 'full'
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
