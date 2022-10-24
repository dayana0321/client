import { Component, HostBinding, OnInit } from '@angular/core';
import {EstadiosService} from '../../services/estadios.service'

@Component({
  selector: 'app-estadios-crud',
  templateUrl: './estadios-crud.component.html',
  styleUrls: ['./estadios-crud.component.css']
})
export class EstadiosCrudComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  estadios: any = []

  constructor(private estadiosService: EstadiosService) { }

  ngOnInit(): void {
    this.ListarEstadios();
  }

  ListarEstadios(){
    this.estadiosService.getEstadios().subscribe(
      res =>{
        this.estadios = res;
        console.log(this.estadios);
      } ,
      err => console.error(err)
    );
  }

  eliminarEstadio(id: string){
    this.estadiosService.deleteEstadio(id).subscribe(
      res =>{
        this.estadios = res;
        this.ListarEstadios();
        console.log(this.estadios);
      },
      err => console.error(err)
    );
  }
}
