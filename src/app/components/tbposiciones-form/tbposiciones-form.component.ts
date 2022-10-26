import { Component, OnInit } from '@angular/core';
import {TbposicionesService} from '../../services/tbposiciones.service'
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-tbposiciones-form',
  templateUrl: './tbposiciones-form.component.html',
  styleUrls: ['./tbposiciones-form.component.css']
})
export class TbposicionesFormComponent implements OnInit {
  tbposiciones: any = {
    id_pais: 0,
    puntosT_tablaP :0,
    partidosJ_tablaP:0,
    partidosG_tablaP:0,
    partidosE_tablaP:0,
    partidosP_tablaP:0,
    golesF_tablaP:0,
    golesC_tablaO:0
  }
  edit: boolean = false;
  constructor(private tbposicionesService:TbposicionesService,private route: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    console.log(params);

    if(params['id']){

      this.tbposicionesService.getTbposicion(params['id'])
        .subscribe(
          res => {

            console.log(res);

            this.tbposiciones = res;

            for(let c of this.tbposiciones){
              this.tbposiciones = c;
              this.edit = true;
            }//fin for
          },
          err => console.log(err)//fin res
        )//fin subscribe
    }//fin if
  }

  SaveNewTbposicion(){
    console.log(this.tbposiciones);
    //console.log(this.pais)
    this.tbposicionesService.SaveTbposiciones(this.tbposiciones)
    .subscribe(
      res => {
        console.log(res);
        this.route.navigate(['/tbposiciones/crud'])
      },
      err => console.error(err)
    )
  }

  actualizarTbposicion(){
    this.tbposicionesService.updateTbposiciones(this.tbposiciones.id_tablaP, this.tbposiciones)
    .subscribe(
      res =>{
        console.log(res)
        console.log(this.tbposiciones.id_tablaP);
        this.route.navigate(['/tbposiciones/crud'])
      },
      err => console.log(err)
    );
  }

}
