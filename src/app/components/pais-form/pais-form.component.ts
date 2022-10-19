import { Component, OnInit, HostBinding } from '@angular/core';
import { Paises } from 'src/app/models/Paises';
import {PaisesService} from '../../services/paises.service'

@Component({
  selector: 'app-pais-form',
  templateUrl: './pais-form.component.html',
  styleUrls: ['./pais-form.component.css']
})
export class PaisFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  pais: Paises = {
    nombre_pais:'',
    codigo_pais:'',
    ranking_pais: 0,
    copas_pais:0,
    bandera_pais:'',
    nombre_region:'',
    nombre_grupo:''
  };

  paises = {
    nombre_pais:'',
    codigo_pais:'',
    ranking_pais: '',
    copas_pais:'',
    bandera_pais:'',
    id_grupo:'',
    id_region:''
  }

  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {
  }
  saveNewPais(){
    //console.log(this.pais)
    this.paisesService.savePais(this.paises)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    )
  }

}
