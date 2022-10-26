import { Component, OnInit } from '@angular/core';
import {ResultadosService} from '../../services/resultados.service';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-resultados-form',
  templateUrl: './resultados-form.component.html',
  styleUrls: ['./resultados-form.component.css']
})
export class ResultadosFormComponent implements OnInit {

  resultados:any ={
    id_calendario: 0,
    golesp1_resultados: 0,
    golesp2_resultados: 0
  }

  edit: boolean = false;
  constructor(private resultadosService: ResultadosService, private route:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    console.log(params);

    if(params['id']){

      this.resultadosService.getResultado(params['id'])
        .subscribe(
          res => {

            console.log(res);

            this.resultados = res;

            for(let p of this.resultados){
              this.resultados = p
              this.edit = true
            }//fin for
          },
          err => console.log(err)//fin res
        )//fin subscribe
    }//fin if
    
  }

  saveNewResultado(){
    console.log(this.resultados);
    //console.log(this.pais)
    this.resultadosService.saveResultado(this.resultados)
    .subscribe(
      res => {
        console.log(res);
        this.route.navigate(['/resultados/crud'])
      },
      err => console.error(err)
    );
  }

  actualizarResultado(){
    this.resultadosService.updateResultado(this.resultados.id_resultados, this.resultados)
    .subscribe(
      res =>{
        console.log(res)
        console.log(this.resultados.id_resultados);
        this.route.navigate(['/resultados/crud'])
      },
      err => console.log(err)
    );
  }

}
