import { Component, OnInit } from '@angular/core';
import {CalendariosService} from '../../services/calendarios.service'

@Component({
  selector: 'app-calendario-crud',
  templateUrl: './calendario-crud.component.html',
  styleUrls: ['./calendario-crud.component.css']
})
export class CalendarioCrudComponent implements OnInit {

  calendarios:any=[]

  constructor(private calendariosService: CalendariosService) { }

  ngOnInit(): void {
    this.listarCalendarios();
  }
  
  listarCalendarios(){
    this.calendariosService.getCalendarios().subscribe(
      res =>{
        this.calendarios = res;
        console.log(this.calendarios);
      },
      err => console.error(err)
    );
  }

  eliminarCalendario(id:string){
    this.calendariosService.deleteCalendario(id).subscribe(
      res =>{
        this.calendarios = res;
        this.listarCalendarios();
        console.log(this.calendarios);
      },
      err => console.error(err)
    );
  }

}
