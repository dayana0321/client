import { Component, HostBinding, OnInit } from '@angular/core';
import {CalendariosService} from '../../services/calendarios.service'
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-calendario-form',
  templateUrl: './calendario-form.component.html',
  styleUrls: ['./calendario-form.component.css']
})
export class CalendarioFormComponent implements OnInit {
  @HostBinding('class') classes  = 'row';
  calendario:any={
    id_estadio:0,
    id_pais1: 0,
    id_pais2: 0,
    id_jornada: 0,
    hora_calendario: ''
  }

  edit: boolean = false;
  constructor(private calendariosService: CalendariosService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    console.log(params);

    if(params['id']){

      this.calendariosService.getCalendario(params['id'])
        .subscribe(
          res => {

            console.log(res);

            this.calendario = res;

            for(let c of this.calendario){
              this.calendario = c;
              this.edit = true;
            }//fin for
          },
          err => console.log(err)//fin res
        )//fin subscribe
    }//fin if
    
  }

  saveNewCalendario(){
    console.log(this.calendario);
    //console.log(this.pais)
    this.calendariosService.saveCalendarios(this.calendario)
    .subscribe(
      res => {
        console.log(res);
        this.route.navigate(['/calendario/crud'])
      },
      err => console.error(err)
    )
  }

  actualizarCalendario(){
    this.calendariosService.updateCalendario(this.calendario.id_calendario, this.calendario)
    .subscribe(
      res =>{
        console.log(res)
        console.log(this.calendario.id_calendario);
        this.route.navigate(['/calendario/crud'])
      },
      err => console.log(err)
    );
  }

}
