import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importar componentes
import {PaisListComponent} from './components/pais-list/pais-list.component'
import {EstadiosListComponent} from './components/estadios-list/estadios-list.component'
import {CalendarioListComponent} from './components/calendario-list/calendario-list.component'
import {CalendarioFormComponent} from './components/calendario-form/calendario-form.component'
import {CalendarioCrudComponent} from './components/calendario-crud/calendario-crud.component'
import {TokenComponent} from './components/token/token.component'
import {PaisFormComponent} from './components/pais-form/pais-form.component'
import {EstadiosFormComponent} from './components/estadios-form/estadios-form.component'
import {ResultadosListComponent} from './components/resultados-list/resultados-list.component'
import {TbposicionesListComponent} from './components/tbposiciones-list/tbposiciones-list.component'
import {HomeComponent} from './components/home/home.component'
import {LoginComponent} from './components/login/login.component'
import {PaisCrudComponent} from './components/pais-crud/pais-crud.component'
import {EstadiosCrudComponent} from './components/estadios-crud/estadios-crud.component'

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
  },
  {
    path:'paises/crud',
    component:PaisCrudComponent
  },
  {
    path: 'estadios/crud',
    component:EstadiosCrudComponent
  },
  {
    path:'paises/edit/:id',
    component: PaisFormComponent
  },
  {
    path: 'estadios/edit/:id',
    component: EstadiosFormComponent
  },
  {
    path: 'calendario/add',
    component: CalendarioFormComponent
  },
  {
    path: 'calendario/crud',
    component: CalendarioCrudComponent
  },
  {
    path: 'calendario/edit/:id',
    component: CalendarioFormComponent
  },
  {
    path: 'resultados',
    component:ResultadosListComponent
  },
  {
    path: 'tbposiciones',
    component: TbposicionesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
