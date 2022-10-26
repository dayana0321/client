import { Component, OnInit } from '@angular/core';
import {TbposicionesService} from '../../services/tbposiciones.service'

@Component({
  selector: 'app-tbposiciones-list',
  templateUrl: './tbposiciones-list.component.html',
  styleUrls: ['./tbposiciones-list.component.css']
})
export class TbposicionesListComponent implements OnInit {
  tbposiciones:any =[]
  constructor(private tbposicionesService:TbposicionesService) { }

  ngOnInit(): void {
    this.tbposicionesService.getTbposiciones().subscribe(
      res =>{
        this.tbposiciones = res;
        console.log(this.tbposiciones);
      } ,
      err => console.error(err)
    );
  }

}
