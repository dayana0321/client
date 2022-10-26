import { Component, OnInit } from '@angular/core';
import {ResultadosService} from '../../services/resultados.service'
@Component({
  selector: 'app-resultados-crud',
  templateUrl: './resultados-crud.component.html',
  styleUrls: ['./resultados-crud.component.css']
})
export class ResultadosCrudComponent implements OnInit {
  resultados:any =[]

  constructor(private resultadosService: ResultadosService) { }

  ngOnInit(): void {
    this.listarResultados();
  }

  listarResultados(){
    this.resultadosService.getResultados().subscribe(
      res =>{
        this.resultados = res;
        console.log(this.resultados);
      } ,
      err => console.error(err)
    );
  }

  eliminarResultados(id:string){
    this.resultadosService.deleteResultado(id).subscribe(
      res =>{
        this.resultados = res;
        this.listarResultados();
        console.log(this.resultados);
      },
      err => console.error(err)
    );
  }

}
