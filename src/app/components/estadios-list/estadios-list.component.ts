import { Component,HostBinding, OnInit } from '@angular/core';
import {EstadiosService} from '../../services/estadios.service'
@Component({
  selector: 'app-estadios-list',
  templateUrl: './estadios-list.component.html',
  styleUrls: ['./estadios-list.component.css']
})
export class EstadiosListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  estadios: any = []
  constructor(private estadiosService: EstadiosService) { }

  ngOnInit(): void {
    this.estadiosService.getEstadios().subscribe(
      res =>{
        this.estadios = res;
        console.log(this.estadios);
      } ,
      err => console.error(err)
    );
  }
}
