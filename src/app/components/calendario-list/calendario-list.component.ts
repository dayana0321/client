import { Component, OnInit } from '@angular/core';
import {CalendariosService} from '../../services/calendarios.service'


@Component({
  selector: 'app-calendario-list',
  templateUrl: './calendario-list.component.html',
  styleUrls: ['./calendario-list.component.css']
})
export class CalendarioListComponent implements OnInit {
  calendarios:any=[]

  constructor(private calendariosService: CalendariosService) { }

  ngOnInit(): void {
    this.calendariosService.getCalendarios().subscribe(
      res =>{
        this.calendarios = res;
        console.log(this.calendarios);
      },
      err => console.error(err)
    );
  }

}
