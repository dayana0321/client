import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PaisListComponent } from './components/pais-list/pais-list.component';
import { EstadiosListComponent } from './components/estadios-list/estadios-list.component';
import { CalendarioListComponent } from './components/calendario-list/calendario-list.component';

//Importar los servicios
import {PaisesService} from './services/paises.service';
import {EstadiosService} from './services/estadios.service';
import {CalendariosService} from './services/calendarios.service';
import { TokenComponent } from './components/token/token.component'
import {TokenService} from './services/token.service';
import {LoginService} from './services/login.service'
import {ResultadosService} from './services/resultados.service'
import { PaisFormComponent } from './components/pais-form/pais-form.component';
import { EstadiosFormComponent } from './components/estadios-form/estadios-form.component';
import {TbposicionesService} from './services/tbposiciones.service'
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PaisCrudComponent } from './components/pais-crud/pais-crud.component';
import { EstadiosCrudComponent } from './components/estadios-crud/estadios-crud.component';
import { CalendarioFormComponent } from './components/calendario-form/calendario-form.component';
import { CalendarioCrudComponent } from './components/calendario-crud/calendario-crud.component';
import { ResultadosListComponent } from './components/resultados-list/resultados-list.component';
import { TbposicionesListComponent } from './components/tbposiciones-list/tbposiciones-list.component';
import { NavigationLComponent } from './components/navigation-l/navigation-l.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PaisListComponent,
    EstadiosListComponent,
    CalendarioListComponent,
    TokenComponent,
    PaisFormComponent,
    EstadiosFormComponent,
    HomeComponent,
    LoginComponent,
    PaisCrudComponent,
    EstadiosCrudComponent,
    CalendarioFormComponent,
    CalendarioCrudComponent,
    ResultadosListComponent,
    TbposicionesListComponent,
    NavigationLComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PaisesService,
    EstadiosService,
    CalendariosService,
    TokenService,
    LoginService,
    ResultadosService,
    TbposicionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
