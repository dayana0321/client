import { Component, OnInit } from '@angular/core';
import {TbposicionesService} from '../../services/tbposiciones.service'

@Component({
  selector: 'app-tbposiciones-crud',
  templateUrl: './tbposiciones-crud.component.html',
  styleUrls: ['./tbposiciones-crud.component.css']
})
export class TbposicionesCrudComponent implements OnInit {
  tbposiciones:any=[]

  constructor(private tbposicionesServices: TbposicionesService) { }

  ngOnInit(): void {
    this.listarTbposiciones();
  }

  listarTbposiciones(){
    this.tbposicionesServices.getTbposiciones().subscribe(
      res =>{
        this.tbposiciones = res;
        console.log(this.tbposiciones);
      } ,
      err => console.error(err)
    );
  }

  eliminarTbposiciones(id:string){
    this.tbposicionesServices.deleteTbposiciones(id).subscribe(
      res =>{
        this.tbposiciones = res;
        this.listarTbposiciones();
        console.log(this.tbposiciones);
      },
      err => console.error(err)
    );
  }

}
