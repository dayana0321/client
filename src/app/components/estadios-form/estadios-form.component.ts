import { Component,HostBinding, OnInit } from '@angular/core';
import {EstadiosService} from '../../services/estadios.service'
import {Estadios} from 'src/app/models/Estadios'

@Component({
  selector: 'app-estadios-form',
  templateUrl: './estadios-form.component.html',
  styleUrls: ['./estadios-form.component.css']
})
export class EstadiosFormComponent implements OnInit {
  @HostBinding('class') classes  = 'row';

  estadios: Estadios = {
    nombre_estadio: '',
    capacidad_estadio: '',
    ciudad_estadio: '',
    descripcion_estadio: '',
    foto_estadio: '',
  }

  constructor(private estadiosService: EstadiosService) { }

  ngOnInit(): void {
  }

  saveNewEstadio(){
    this.estadiosService.saveEstadio(this.estadios).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)

    )
  }

}
