import { Component, OnInit } from '@angular/core';
import {CalendariosService} from '../../services/calendarios.service'
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-calendario-form',
  templateUrl: './calendario-form.component.html',
  styleUrls: ['./calendario-form.component.css']
})
export class CalendarioFormComponent implements OnInit {

  calendario:any={
    id_estadio:0,
    id_pais1: 0,
    id_pais2: 0,
    id_jornada: 0,
    hora_calendario: ''
  }
  constructor(private calendariosService: CalendariosService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.calendario);
    //console.log(this.pais)
    this.calendariosService.saveCalendarios(this.calendario)
    .subscribe(
      res => {
        console.log(res);
        this.route.navigate(['/calendario'])
      },
      err => console.error(err)
    )
  }


}
