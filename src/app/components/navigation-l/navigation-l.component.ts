import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-l',
  templateUrl: './navigation-l.component.html',
  styleUrls: ['./navigation-l.component.css']
})
export class NavigationLComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logout(){
  //  const token = localStorage.getItem('token');
    localStorage.removeItem('token');
  }
}
