import { Component, HostBinding, OnInit } from '@angular/core';
import {PaisesService} from '../../services/paises.service'

@Component({
  selector: 'app-pais-crud',
  templateUrl: './pais-crud.component.html',
  styleUrls: ['./pais-crud.component.css']
})
export class PaisCrudComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  paises: any = [];

  constructor(private paisesService:PaisesService) { }

  ngOnInit(): void {
    this.ListPaises();
  }

  ListPaises(){
    this.paisesService.getPaises().subscribe(
      res =>{
        this.paises = res;
        console.log(this.paises);
      },
      err => console.error(err)
    );
  }

  eliminarPais(id:string){
    this.paisesService.deletePais(id).subscribe(
      res =>{
        this.paises = res;
        this.ListPaises();
        console.log(this.paises);
      },
      err => console.error(err)
    );
  }
}
