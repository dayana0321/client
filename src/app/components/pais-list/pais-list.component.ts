import { Component, OnInit } from '@angular/core';
import {PaisesService} from '../../services/paises.service'

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css']
})
export class PaisListComponent implements OnInit {
  paises: any = [];
  constructor(private paisesService:PaisesService) { }

  ngOnInit(): void {
    this.paisesService.getPaises().subscribe(
      res =>{
        this.paises = res;
        console.log(this.paises);
      } ,
      err => console.error(err)
    );
  }

}
