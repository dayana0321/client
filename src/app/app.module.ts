import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PaisListComponent } from './components/pais-list/pais-list.component';
import { EstadiosListComponent } from './components/estadios-list/estadios-list.component';
import { CalendarioListComponent } from './components/calendario-list/calendario-list.component';

//Importar los servicios
import {PaisesService} from './services/paises.service';
import {EstadiosService} from './services/estadios.service';
import {CalendariosService} from './services/calendarios.service'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PaisListComponent,
    EstadiosListComponent,
    CalendarioListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PaisesService,
    EstadiosService,
    CalendariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
