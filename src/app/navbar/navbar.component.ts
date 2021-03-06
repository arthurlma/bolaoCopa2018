import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logado = true;

  constructor() { }

  ngOnInit() {
  }

  login() {
    this.logado = true;
  }

  logout() {
    this.logado = false;
  }

  // private currentCollapse: boolean;
  // @Output()
  // collapseChange: EventEmitter<any> = new EventEmitter();
  // @Input() set collapse(collapse: boolean){
  //   this.currentCollapse = collapse;
  //   this.collapseChange.emit(collapse);
  // }
  // get collapse(){
  //   return this.currentCollapse;
  // }

  // toggleMenu(){
  //   document.getElementById('menu').click();
  // }

}
