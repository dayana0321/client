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
import { PaisFormComponent } from './components/pais-form/pais-form.component';
import { EstadiosFormComponent } from './components/estadios-form/estadios-form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PaisCrudComponent } from './components/pais-crud/pais-crud.component';
import { EstadiosCrudComponent } from './components/estadios-crud/estadios-crud.component';
import { CalendarioFormComponent } from './components/calendario-form/calendario-form.component';

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
    CalendarioFormComponent
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
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
