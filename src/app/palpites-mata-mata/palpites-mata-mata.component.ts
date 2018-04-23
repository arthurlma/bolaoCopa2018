import { Component, OnInit, Input } from '@angular/core';
import { Paises } from '../paises.enum';

@Component({
  selector: 'app-palpites-mata-mata',
  templateUrl: './palpites-mata-mata.component.html',
  styleUrls: ['./palpites-mata-mata.component.css']
})
export class PalpitesMataMataComponent implements OnInit {

  iconPrimeiroA: string;
  iconSegundoA: string;
  iconPrimeiroB: string;
  iconSegundoB: string;
  iconPrimeiroC: string;
  iconSegundoC: string;
  iconPrimeiroD: string;
  iconSegundoD: string;
  iconPrimeiroE: string;
  iconSegundoE: string;
  iconPrimeiroF: string;
  iconSegundoF: string;
  iconPrimeiroG: string;
  iconSegundoG: string;
  iconPrimeiroH: string;
  iconSegundoH: string;
  nomePrimeiroA: string;
  nomeSegundoA: string;
  nomePrimeiroB: string;
  nomeSegundoB: string;
  nomePrimeiroC: string;
  nomeSegundoC: string;
  nomePrimeiroD: string;
  nomeSegundoD: string;
  nomePrimeiroE: string;
  nomeSegundoE: string;
  nomePrimeiroF: string;
  nomeSegundoF: string;
  nomePrimeiroG: string;
  nomeSegundoG: string;
  nomePrimeiroH: string;
  nomeSegundoH: string;

  @Input() set primeiroA(primeiroA: string) {
    this.iconPrimeiroA = '/assets/icons65/' + primeiroA + '.png';
    this.nomePrimeiroA = Paises[primeiroA];
  }
  @Input() set segundoA(segundoA: string) {
    this.iconSegundoA = '/assets/icons65/' + segundoA + '.png';
    this.nomeSegundoA = Paises[segundoA];
  }
  @Input() set primeiroB(primeiroB: string) {
    this.iconPrimeiroB = '/assets/icons65/' + primeiroB + '.png';
    this.nomePrimeiroB = Paises[primeiroB];
  }
  @Input() set segundoB(segundoB: string) {
    this.iconSegundoB = '/assets/icons65/' + segundoB + '.png';
    this.nomeSegundoB = Paises[segundoB];
  }
  @Input() set primeiroC(primeiroC: string) {
    this.iconPrimeiroC = '/assets/icons65/' + primeiroC + '.png';
    this.nomePrimeiroC = Paises[primeiroC];
  }
  @Input() set segundoC(segundoC: string) {
    this.iconSegundoC = '/assets/icons65/' + segundoC + '.png';
    this.nomeSegundoC = Paises[segundoC];
  }
  @Input() set primeiroD(primeiroD: string) {
    this.iconPrimeiroD = '/assets/icons65/' + primeiroD + '.png';
    this.nomePrimeiroD = Paises[primeiroD];
  }
  @Input() set segundoD(segundoD: string) {
    this.iconSegundoD = '/assets/icons65/' + segundoD + '.png';
    this.nomeSegundoD = Paises[segundoD];
  }
  @Input() set primeiroE(primeiroE: string) {
    this.iconPrimeiroE = '/assets/icons65/' + primeiroE + '.png';
    this.nomePrimeiroE = Paises[primeiroE];
  }
  @Input() set segundoE(segundoE: string) {
    this.iconSegundoE = '/assets/icons65/' + segundoE + '.png';
    this.nomeSegundoE = Paises[segundoE];
  }
  @Input() set primeiroF(primeiroF: string) {
    this.iconPrimeiroF = '/assets/icons65/' + primeiroF + '.png';
    this.nomePrimeiroF = Paises[primeiroF];
  }
  @Input() set segundoF(segundoF: string) {
    this.iconSegundoF = '/assets/icons65/' + segundoF + '.png';
    this.nomeSegundoF = Paises[segundoF];
  }
  @Input() set primeiroG(primeiroG: string) {
    this.iconPrimeiroG = '/assets/icons65/' + primeiroG + '.png';
    this.nomePrimeiroG = Paises[primeiroG];
  }
  @Input() set segundoG(segundoG: string) {
    this.iconSegundoG = '/assets/icons65/' + segundoG + '.png';
    this.nomeSegundoG = Paises[segundoG];
  }
  @Input() set primeiroH(primeiroH: string) {
    this.iconPrimeiroH = '/assets/icons65/' + primeiroH + '.png';
    this.nomePrimeiroH = Paises[primeiroH];
  }
  @Input() set segundoH(segundoH: string) {
    this.iconSegundoH = '/assets/icons65/' + segundoH + '.png';
    this.nomeSegundoH = Paises[segundoH];
  }


  constructor() { }

  ngOnInit() {
  }

}
