import { Component,HostBinding, OnInit } from '@angular/core';
import {EstadiosService} from '../../services/estadios.service'
import {Estadios} from 'src/app/models/Estadios'
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-estadios-form',
  templateUrl: './estadios-form.component.html',
  styleUrls: ['./estadios-form.component.css']
})
export class EstadiosFormComponent implements OnInit {
  @HostBinding('class') classes  = 'row';

  estadios: any = {
    nombre_estadio: '',
    capacidad_estadio: '',
    ciudad_estadio: '',
    descripcion_estadio: '',
    foto_estadio: '',
  }

  edit: boolean = false;
  constructor(private estadiosService: EstadiosService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    console.log(params);

    if(params['id']){

      this.estadiosService.getEstadio(params['id'])
        .subscribe(
          res => {

            console.log(res);

            this.estadios = res;

            for(let e of this.estadios){
              this.estadios = e
            }//fin for
          },
          err => console.log(err)//fin res
        )//fin subscribe
    }//fin if
  }

  saveNewEstadio(){
    this.estadiosService.saveEstadio(this.estadios).subscribe(
      res => {
        console.log(res);
        this.route.navigate(['/estadios/crud'])
      },
      err => console.error(err)
    )
  }

  actualizarEstadio(){
    this.estadiosService.updateEstadio(this.estadios.id, this.estadios)
    .subscribe(
      res =>{
        console.log(res)
        this.route.navigate(['/paises/crud'])
      },
      err => console.log(err)
    );
  }
}
