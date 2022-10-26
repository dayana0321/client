import { Component, OnInit } from '@angular/core';
import {ResultadosService} from '../../services/resultados.service'

@Component({
  selector: 'app-resultados-list',
  templateUrl: './resultados-list.component.html',
  styleUrls: ['./resultados-list.component.css']
})
export class ResultadosListComponent implements OnInit {
  resultados:any =[]
  constructor(private resultadosService: ResultadosService) { }

  ngOnInit(): void {
    this.resultadosService.getResultados().subscribe(
      res =>{
        this.resultados = res;
        console.log(this.resultados);
      } ,
      err => console.error(err)
    );
  }
}


