import { Component, OnInit, Input } from '@angular/core';
import { Paises } from '../paises.enum';

@Component({
  selector: 'app-palpites-mata-mata',
  templateUrl: './palpites-mata-mata.component.html',
  styleUrls: ['./palpites-mata-mata.component.css']
})
export class PalpitesMataMataComponent implements OnInit {

  // tags: HTMLLIElement[] =  new Array<HTMLLIElement>();
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
  iconVencedor1: string;
  iconVencedor2: string;
  iconVencedor3: string;
  iconVencedor4: string;
  iconVencedor5: string;
  iconVencedor6: string;
  iconVencedor7: string;
  iconVencedor8: string;
  iconVencedor9: string;
  iconVencedor10: string;
  iconVencedor11: string;
  iconVencedor12: string;
  iconVencedor13: string;
  iconVencedor14: string;
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
  nomeVencedor1: string;
  nomeVencedor2: string;
  nomeVencedor3: string;
  nomeVencedor4: string;
  nomeVencedor5: string;
  nomeVencedor6: string;
  nomeVencedor7: string;
  nomeVencedor8: string;
  nomeVencedor9: string;
  nomeVencedor10: string;
  nomeVencedor11: string;
  nomeVencedor12: string;
  nomeVencedor13: string;
  nomeVencedor14: string;

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

  vencedorJogo1(id1, id2, icon, nome){
    document.getElementById(id1).classList.add('vencedor');
    document.getElementById(id2).classList.remove('vencedor');
    document.getElementById(id2).classList.add('perdedor');
    document.getElementById(id1).classList.remove('perdedor');
    this.iconVencedor1 = icon;
    this.nomeVencedor1 = nome;
    document.getElementById('vencedorJogo1').classList.remove('padding-null-item');
  }

  vencedorJogo2(id1, id2, icon, nome){
    document.getElementById(id1).classList.add('vencedor');
    document.getElementById(id2).classList.remove('vencedor');
    document.getElementById(id2).classList.add('perdedor');
    document.getElementById(id1).classList.remove('perdedor');
    this.iconVencedor2 = icon;
    this.nomeVencedor2 = nome;
    document.getElementById('vencedorJogo2').classList.remove('padding-null-item');
  }

  vencedorJogo3(id1, id2, icon, nome){
    document.getElementById(id1).classList.add('vencedor');
    document.getElementById(id2).classList.remove('vencedor');
    document.getElementById(id2).classList.add('perdedor');
    document.getElementById(id1).classList.remove('perdedor');
    this.iconVencedor3 = icon;
    this.nomeVencedor3 = nome;
    document.getElementById('vencedorJogo3').classList.remove('padding-null-item');
  }

  vencedorJogo4(id1, id2, icon, nome){
    document.getElementById(id1).classList.add('vencedor');
    document.getElementById(id2).classList.remove('vencedor');
    document.getElementById(id2).classList.add('perdedor');
    document.getElementById(id1).classList.remove('perdedor');
    this.iconVencedor4 = icon;
    this.nomeVencedor4 = nome;
    document.getElementById('vencedorJogo4').classList.remove('padding-null-item');
  }

  vencedorJogo5(id1, id2, icon, nome){
    document.getElementById(id1).classList.add('vencedor');
    document.getElementById(id2).classList.remove('vencedor');
    document.getElementById(id2).classList.add('perdedor');
    document.getElementById(id1).classList.remove('perdedor');
    this.iconVencedor5 = icon;
    this.nomeVencedor5 = nome;
    document.getElementById('vencedorJogo5').classList.remove('padding-null-item');
  }

  vencedorJogo6(id1, id2, icon, nome){
    document.getElementById(id1).classList.add('vencedor');
    document.getElementById(id2).classList.remove('vencedor');
    document.getElementById(id2).classList.add('perdedor');
    document.getElementById(id1).classList.remove('perdedor');
    this.iconVencedor6 = icon;
    this.nomeVencedor6 = nome;
    document.getElementById('vencedorJogo6').classList.remove('padding-null-item');
  }

  vencedorJogo7(id1, id2, icon, nome){
    document.getElementById(id1).classList.add('vencedor');
    document.getElementById(id2).classList.remove('vencedor');
    document.getElementById(id2).classList.add('perdedor');
    document.getElementById(id1).classList.remove('perdedor');
    this.iconVencedor7 = icon;
    this.nomeVencedor7 = nome;
    document.getElementById('vencedorJogo7').classList.remove('padding-null-item');
  }

  vencedorJogo8(id1, id2, icon, nome){
    document.getElementById(id1).classList.add('vencedor');
    document.getElementById(id2).classList.remove('vencedor');
    document.getElementById(id2).classList.add('perdedor');
    document.getElementById(id1).classList.remove('perdedor');
    this.iconVencedor8 = icon;
    this.nomeVencedor8 = nome;
    document.getElementById('vencedorJogo8').classList.remove('padding-null-item');
  }

  vencedorJogo9(id1, id2, icon, nome){
    document.getElementById(id1).classList.add('vencedor');
    document.getElementById(id2).classList.remove('vencedor');
    document.getElementById(id2).classList.add('perdedor');
    document.getElementById(id1).classList.remove('perdedor');
    this.iconVencedor9 = icon;
    this.nomeVencedor9 = nome;
    document.getElementById('vencedorJogo9').classList.remove('padding-null-item');
  }

  vencedorJogo10(id1, id2, icon, nome){
    document.getElementById(id1).classList.add('vencedor');
    document.getElementById(id2).classList.remove('vencedor');
    document.getElementById(id2).classList.add('perdedor');
    document.getElementById(id1).classList.remove('perdedor');
    this.iconVencedor10 = icon;
    this.nomeVencedor10 = nome;
    document.getElementById('vencedorJogo10').classList.remove('padding-null-item');
  }

  vencedorJogo11(id1, id2, icon, nome){
    document.getElementById(id1).classList.add('vencedor');
    document.getElementById(id2).classList.remove('vencedor');
    document.getElementById(id2).classList.add('perdedor');
    document.getElementById(id1).classList.remove('perdedor');
    this.iconVencedor11 = icon;
    this.nomeVencedor11 = nome;
    document.getElementById('vencedorJogo11').classList.remove('padding-null-item');
  }

  vencedorJogo12(id1, id2, icon, nome){
    document.getElementById(id1).classList.add('vencedor');
    document.getElementById(id2).classList.remove('vencedor');
    document.getElementById(id2).classList.add('perdedor');
    document.getElementById(id1).classList.remove('perdedor');
    this.iconVencedor12 = icon;
    this.nomeVencedor12 = nome;
    document.getElementById('vencedorJogo12').classList.remove('padding-null-item');
  }

  vencedorJogo13(id1, id2, icon, nome){
    document.getElementById(id1).classList.add('vencedor');
    document.getElementById(id2).classList.remove('vencedor');
    document.getElementById(id2).classList.add('perdedor');
    document.getElementById(id1).classList.remove('perdedor');
    this.iconVencedor13 = icon;
    this.nomeVencedor13 = nome;
    document.getElementById('vencedorJogo13').classList.remove('padding-null-item');
  }

  vencedorJogo14(id1, id2, icon, nome){
    document.getElementById(id1).classList.add('vencedor');
    document.getElementById(id2).classList.remove('vencedor');
    document.getElementById(id2).classList.add('perdedor');
    document.getElementById(id1).classList.remove('perdedor');
    this.iconVencedor14 = icon;
    this.nomeVencedor14 = nome;
    document.getElementById('vencedorJogo14').classList.remove('padding-null-item');
  }

  vencedorJogo15(id1, id2, icon, nome){
    document.getElementById(id1).classList.add('vencedor');
    document.getElementById(id2).classList.remove('vencedor');
    document.getElementById(id2).classList.add('perdedor');
    document.getElementById(id1).classList.remove('perdedor');
  }

  // desfazer(){
    // tags: new Array<HTMLLIElement>();
    // this.tags = document.getElementsByTagName('li');
  // }
}
