import { Component, OnInit, Input } from '@angular/core';
import { Paises } from '../paises.enum';
import { Selecao } from './../models/selecao';
import { Jogo } from './../models/jogo';

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
  selecao1: Selecao = new Selecao();
  selecao2: Selecao = new Selecao();
  selecao3: Selecao = new Selecao();
  selecao4: Selecao = new Selecao();
  primeiro: Selecao = new Selecao();
  segundo: Selecao = new Selecao();
  terceiro: Selecao = new Selecao();
  quarto: Selecao = new Selecao();
  jogo1: Jogo = new Jogo();
  jogo2: Jogo = new Jogo();
  jogo3: Jogo = new Jogo();
  jogo4: Jogo = new Jogo();
  jogo5: Jogo = new Jogo();
  jogo6: Jogo = new Jogo();

  @Input() nomeGrupo: string;
  @Input() set pais1(pais1: string) {
    this.iconPais1 = '/assets/icons65/' + pais1 + '.png';
    this.nomePais1 = Paises[pais1];
    this.selecao1.Nome = this.nomePais1;
    this.jogo1.selecao1 = Paises[pais1];
    this.jogo3.selecao1 = Paises[pais1];
    this.jogo5.selecao2 = Paises[pais1];
    this.primeiro.Nome = Paises[pais1];
  }
  @Input() set pais2(pais2: string) {
    this.iconPais2 = '/assets/icons65/' + pais2 + '.png';
    this.nomePais2 = Paises[pais2];
    this.selecao2.Nome = this.nomePais2;
    this.jogo1.selecao2 = Paises[pais2];
    this.jogo4.selecao2 = Paises[pais2];
    this.jogo6.selecao1 = Paises[pais2];
    this.segundo.Nome = Paises[pais2];
  }
  @Input() set pais3(pais3: string) {
    this.iconPais3 = '/assets/icons65/' + pais3 + '.png';
    this.nomePais3 = Paises[pais3];
    this.selecao3.Nome =this.nomePais3;
    this.jogo2.selecao1 = Paises[pais3];
    this.jogo3.selecao2 = Paises[pais3];
    this.jogo6.selecao2 = Paises[pais3];
    this.terceiro.Nome = Paises[pais3];
  }
  @Input() set pais4(pais4: string) {
    this.iconPais4 = '/assets/icons65/' + pais4 + '.png';
    this.nomePais4 = Paises[pais4];
    this.selecao4.Nome = this.nomePais4;
    this.jogo2.selecao2 = Paises[pais4];
    this.jogo4.selecao1 = Paises[pais4];
    this.jogo5.selecao1 = Paises[pais4];
    this.quarto.Nome = Paises[pais4];
  }

  constructor() { }

  ngOnInit() {
    // this.pais = Paises['Russia'];
    // console.log(this.pais);
    // console.log('this.paises');
    // console.log(Paises);
  }

  partida1(){
    // console.log('partida1');
  }

  partida2(){
    // console.log('partida2');
  }

  partida3(){
    // console.log('partida3');
  }

  partida4(){
    // console.log('partida4');
  }

  partida5(){
    // console.log('partida5');
  }

  partida6(){
    // console.log('partida6');
  }


}
