import { Component, OnInit, HostBinding } from '@angular/core';
import { Paises } from 'src/app/models/Paises';
import {PaisesService} from '../../services/paises.service'
import {Router, ActivatedRoute} from '@angular/router'

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

  paises:any = {
    nombre_pais:'',
    codigo_pais:'',
    ranking_pais: 0,
    copas_pais:0,
    bandera_pais:'',
    id_grupo:0,
    id_region:0
  };

  edit: boolean = false;

  constructor(private paisesService: PaisesService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    console.log(params);

    if(params['id']){

      this.paisesService.getPais(params['id'])
        .subscribe(
          res => {

            console.log(res);

            this.paises = res;

            for(let p of this.paises){
              this.paises = p
            }//fin for
          },
          err => console.log(err)//fin res
        )//fin subscribe
    }//fin if
  }
  
  saveNewPais(){
    console.log(this.paises);
    //console.log(this.pais)
    this.paisesService.savePais(this.paises)
    .subscribe(
      res => {
        console.log(res);
        this.route.navigate(['/paises/crud'])
      },
      err => console.error(err)
    )
  }

  actualizarPais(){
    this.paisesService.updatePais(this.paises.id, this.paises)
    .subscribe(
      res =>{
        console.log(res)
        this.route.navigate(['/paises/crud'])
      },
      err => console.log(err)
    );
  }
}
