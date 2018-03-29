import { Component, OnInit, Input } from '@angular/core';
import { Paises } from '../paises.enum';

@Component({
  selector: 'app-palpites',
  templateUrl: './palpites.component.html',
  styleUrls: ['./palpites.component.css']
})
export class PalpitesComponent implements OnInit {

  iconPais1: string;
  iconPais2: string;
  iconPais3: string;
  iconPais4: string;
  nomePais1: string;
  nomePais2: string;
  nomePais3: string;
  nomePais4: string;

  @Input() nomeGrupo: string;
  @Input() set pais1(pais1: string) {
    this.iconPais1 = '/assets/icons65/' + pais1 + '.png';
    this.nomePais1 = Paises[pais1];
  }
  @Input() set pais2(pais2: string) {
    this.iconPais2 = '/assets/icons65/' + pais2 + '.png';
    this.nomePais2 = Paises[pais2];
  }
  @Input() set pais3(pais3: string) {
    this.iconPais3 = '/assets/icons65/' + pais3 + '.png';
    this.nomePais3 = Paises[pais3];
  }
  @Input() set pais4(pais4: string) {
    this.iconPais4 = '/assets/icons65/' + pais4 + '.png';
    this.nomePais4 = Paises[pais4];
  }

  constructor() { }

  ngOnInit() {
    // this.pais = Paises['Russia'];
    // console.log(this.pais);
    // console.log('this.paises');
    // console.log(Paises);
  }


}
