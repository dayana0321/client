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
import {ResultadosFormComponent} from './components/resultados-form/resultados-form.component'
import {TbposicionesFormComponent} from './components/tbposiciones-form/tbposiciones-form.component'
import {ResultadosCrudComponent} from './components/resultados-crud/resultados-crud.component'
import {TbposicionesCrudComponent} from './components/tbposiciones-crud/tbposiciones-crud.component'
import { AuthGuard } from './guards/auth.guard';

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
    component:PaisFormComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'estadios/add',
    component: EstadiosFormComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path:'paises/crud',
    component:PaisCrudComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'estadios/crud',
    component:EstadiosCrudComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'paises/edit/:id',
    component: PaisFormComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'estadios/edit/:id',
    component: EstadiosFormComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'calendario/add',
    component: CalendarioFormComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'calendario/crud',
    component: CalendarioCrudComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'calendario/edit/:id',
    component: CalendarioFormComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'resultados',
    component:ResultadosListComponent
  },
  {
    path: 'tbposiciones',
    component: TbposicionesListComponent
  },
  {
    path: 'resultados/add',
    component: ResultadosFormComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'tbposiciones/add',
    component: TbposicionesFormComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'resultados/crud',
    component:ResultadosCrudComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'tbposiciones/crud',
    component: TbposicionesCrudComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'resultados/edit/:id',
    component: ResultadosFormComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'tbposiciones/edit/:id',
    component: TbposicionesFormComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
