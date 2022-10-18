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

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PaisListComponent,
    EstadiosListComponent,
    CalendarioListComponent,
    TokenComponent
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
    TokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
