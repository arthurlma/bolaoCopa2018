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
  selecoes: Selecao[] = new Array<Selecao>();

  @Input() nomeGrupo: string;
  @Input() set pais1(pais1: string) {
    this.iconPais1 = '/assets/icons65/' + pais1 + '.png';
    this.nomePais1 = Paises[pais1];
    this.selecao1.nome = this.nomePais1;
    this.jogo1.selecao1 = Paises[pais1];
    this.jogo3.selecao1 = Paises[pais1];
    this.jogo5.selecao2 = Paises[pais1];
    this.primeiro.nome = Paises[pais1];
  }
  @Input() set pais2(pais2: string) {
    this.iconPais2 = '/assets/icons65/' + pais2 + '.png';
    this.nomePais2 = Paises[pais2];
    this.selecao2.nome = this.nomePais2;
    this.jogo1.selecao2 = Paises[pais2];
    this.jogo4.selecao2 = Paises[pais2];
    this.jogo6.selecao1 = Paises[pais2];
    this.segundo.nome = Paises[pais2];
  }
  @Input() set pais3(pais3: string) {
    this.iconPais3 = '/assets/icons65/' + pais3 + '.png';
    this.nomePais3 = Paises[pais3];
    this.selecao3.nome =this.nomePais3;
    this.jogo2.selecao1 = Paises[pais3];
    this.jogo3.selecao2 = Paises[pais3];
    this.jogo6.selecao2 = Paises[pais3];
    this.terceiro.nome = Paises[pais3];
  }
  @Input() set pais4(pais4: string) {
    this.iconPais4 = '/assets/icons65/' + pais4 + '.png';
    this.nomePais4 = Paises[pais4];
    this.selecao4.nome = this.nomePais4;
    this.jogo2.selecao2 = Paises[pais4];
    this.jogo4.selecao1 = Paises[pais4];
    this.jogo5.selecao1 = Paises[pais4];
    this.quarto.nome = Paises[pais4];
  }

  

  constructor() { }

  ngOnInit() {
    // this.pais = Paises['Russia'];
    // console.log(this.pais);
    // console.log('this.paises');
    // console.log(Paises);

    this.selecoes.push(this.selecao1);
    this.selecoes.push(this.selecao2);
    this.selecoes.push(this.selecao3);
    this.selecoes.push(this.selecao4);
  }

  partida1(){
    // console.log('partida1');
    if (this.jogo1.placar1 > this.jogo1.placar2) {
      this.jogo1.pontosSelecao1 = 3;
      this.jogo1.pontosSelecao2 = 0;
      this.jogo1.vitoriaSelecao1 = 1;
      this.jogo1.vitoriaSelecao2 = 0;
      this.jogo1.derrotaSelecao2 = 1;
      this.jogo1.derrotaSelecao1 = 0;
      this.jogo1.empateSelecao1 = 0;
      this.jogo1.empateSelecao2 = 0;
    } else if (this.jogo1.placar1 < this.jogo1.placar2) {
      this.jogo1.pontosSelecao2 = 3;
      this.jogo1.pontosSelecao1 = 0;
      this.jogo1.vitoriaSelecao2 = 1;
      this.jogo1.vitoriaSelecao1 = 0;
      this.jogo1.derrotaSelecao1 = 1;
      this.jogo1.derrotaSelecao2 = 0;
      this.jogo1.empateSelecao1 = 0;
      this.jogo1.empateSelecao2 = 0;
    } else {
      this.jogo1.pontosSelecao1 = 1;
      this.jogo1.pontosSelecao2 = 1;
      this.jogo1.empateSelecao1 = 1;
      this.jogo1.empateSelecao2 = 1;
      this.jogo1.vitoriaSelecao1 = 0;
      this.jogo1.vitoriaSelecao2 = 0;
      this.jogo1.derrotaSelecao1 = 0;
      this.jogo1.derrotaSelecao2 = 0;
    }
    this.atualizaTabela();
  }

  partida2(){
    // console.log('partida2');
    if (this.jogo2.placar1 > this.jogo2.placar2) {
      this.jogo2.pontosSelecao1 = 3;
      this.jogo2.pontosSelecao2 = 0;
      this.jogo2.vitoriaSelecao1 = 1;
      this.jogo2.vitoriaSelecao2 = 0;
      this.jogo2.derrotaSelecao2 = 1;
      this.jogo2.derrotaSelecao1 = 0;
      this.jogo2.empateSelecao1 = 0;
      this.jogo2.empateSelecao2 = 0;
    } else if (this.jogo2.placar1 < this.jogo2.placar2) {
      this.jogo2.pontosSelecao2 = 3;
      this.jogo2.pontosSelecao1 = 0;
      this.jogo2.vitoriaSelecao2 = 1;
      this.jogo2.vitoriaSelecao1 = 0;
      this.jogo2.derrotaSelecao1 = 1;
      this.jogo2.derrotaSelecao2 = 0;
      this.jogo2.empateSelecao1 = 0;
      this.jogo2.empateSelecao2 = 0;
    } else {
      this.jogo2.pontosSelecao1 = 1;
      this.jogo2.pontosSelecao2 = 1;
      this.jogo2.empateSelecao1 = 1;
      this.jogo2.empateSelecao2 = 1;
      this.jogo2.vitoriaSelecao1 = 0;
      this.jogo2.vitoriaSelecao2 = 0;
      this.jogo2.derrotaSelecao1 = 0;
      this.jogo2.derrotaSelecao2 = 0;
    }
    this.atualizaTabela();
  }

  partida3(){
    // console.log('partida3');
    if (this.jogo3.placar1 > this.jogo3.placar2) {
      this.jogo3.pontosSelecao1 = 3;
      this.jogo3.pontosSelecao2 = 0;
      this.jogo3.vitoriaSelecao1 = 1;
      this.jogo3.vitoriaSelecao2 = 0;
      this.jogo3.derrotaSelecao2 = 1;
      this.jogo3.derrotaSelecao1 = 0;
      this.jogo3.empateSelecao1 = 0;
      this.jogo3.empateSelecao2 = 0;
    } else if (this.jogo3.placar1 < this.jogo3.placar2) {
      this.jogo3.pontosSelecao2 = 3;
      this.jogo3.pontosSelecao1 = 0;
      this.jogo3.vitoriaSelecao2 = 1;
      this.jogo3.vitoriaSelecao1 = 0;
      this.jogo3.derrotaSelecao1 = 1;
      this.jogo3.derrotaSelecao2 = 0;
      this.jogo3.empateSelecao1 = 0;
      this.jogo3.empateSelecao2 = 0;
    } else {
      this.jogo3.pontosSelecao1 = 1;
      this.jogo3.pontosSelecao2 = 1;
      this.jogo3.empateSelecao1 = 1;
      this.jogo3.empateSelecao2 = 1;
      this.jogo3.vitoriaSelecao1 = 0;
      this.jogo3.vitoriaSelecao2 = 0;
      this.jogo3.derrotaSelecao1 = 0;
      this.jogo3.derrotaSelecao2 = 0;
    }
    this.atualizaTabela();
  }

  partida4(){
    // console.log('partida4');
    if (this.jogo4.placar1 > this.jogo4.placar2) {
      this.jogo4.pontosSelecao1 = 3;
      this.jogo4.pontosSelecao2 = 0;
      this.jogo4.vitoriaSelecao1 = 1;
      this.jogo4.vitoriaSelecao2 = 0;
      this.jogo4.derrotaSelecao2 = 1;
      this.jogo4.derrotaSelecao1 = 0;
      this.jogo4.empateSelecao1 = 0;
      this.jogo4.empateSelecao2 = 0;
    } else if (this.jogo4.placar1 < this.jogo4.placar2) {
      this.jogo4.pontosSelecao2 = 3;
      this.jogo4.pontosSelecao1 = 0;
      this.jogo4.vitoriaSelecao2 = 1;
      this.jogo4.vitoriaSelecao1 = 0;
      this.jogo4.derrotaSelecao1 = 1;
      this.jogo4.derrotaSelecao2 = 0;
      this.jogo4.empateSelecao1 = 0;
      this.jogo4.empateSelecao2 = 0;
    } else {
      this.jogo4.pontosSelecao1 = 1;
      this.jogo4.pontosSelecao2 = 1;
      this.jogo4.empateSelecao1 = 1;
      this.jogo4.empateSelecao2 = 1;
      this.jogo4.vitoriaSelecao1 = 0;
      this.jogo4.vitoriaSelecao2 = 0;
      this.jogo4.derrotaSelecao1 = 0;
      this.jogo4.derrotaSelecao2 = 0;
    }
    this.atualizaTabela();
  }

  partida5(){
    // console.log('partida5');
    if (this.jogo5.placar1 > this.jogo5.placar2) {
      this.jogo5.pontosSelecao1 = 3;
      this.jogo5.pontosSelecao2 = 0;
      this.jogo5.vitoriaSelecao1 = 1;
      this.jogo5.vitoriaSelecao2 = 0;
      this.jogo5.derrotaSelecao2 = 1;
      this.jogo5.derrotaSelecao1 = 0;
      this.jogo5.empateSelecao1 = 0;
      this.jogo5.empateSelecao2 = 0;
    } else if (this.jogo5.placar1 < this.jogo5.placar2) {
      this.jogo5.pontosSelecao1 = 0;
      this.jogo5.pontosSelecao2 = 3;
      this.jogo5.vitoriaSelecao1 = 0;
      this.jogo5.vitoriaSelecao2 = 1;
      this.jogo5.derrotaSelecao1 = 1;
      this.jogo5.derrotaSelecao2 = 0;
      this.jogo5.empateSelecao1 = 0;
      this.jogo5.empateSelecao2 = 0;
    } else {
      this.jogo5.pontosSelecao1 = 1;
      this.jogo5.pontosSelecao2 = 1;
      this.jogo5.empateSelecao1 = 1;
      this.jogo5.empateSelecao2 = 1;
      this.jogo5.vitoriaSelecao1 = 0;
      this.jogo5.vitoriaSelecao2 = 0;
      this.jogo5.derrotaSelecao1 = 0;
      this.jogo5.derrotaSelecao2 = 0;
    }
    this.atualizaTabela();
  }

  partida6(){
    // console.log('partida6');
    if (this.jogo6.placar1 > this.jogo6.placar2) {
      this.jogo6.pontosSelecao1 = 3;
      this.jogo6.pontosSelecao2 = 0;
      this.jogo6.vitoriaSelecao1 = 1;
      this.jogo6.vitoriaSelecao2 = 0;
      this.jogo6.derrotaSelecao2 = 1;
      this.jogo6.derrotaSelecao1 = 0;
      this.jogo6.empateSelecao1 = 0;
      this.jogo6.empateSelecao2 = 0;
    } else if (this.jogo6.placar1 < this.jogo6.placar2) {
      this.jogo6.pontosSelecao1 = 0;
      this.jogo6.pontosSelecao2 = 3;
      this.jogo6.vitoriaSelecao2 = 1;
      this.jogo6.vitoriaSelecao1 = 0;
      this.jogo6.derrotaSelecao1 = 1;
      this.jogo6.derrotaSelecao2 = 0;
      this.jogo6.empateSelecao1 = 0;
      this.jogo6.empateSelecao2 = 0;
    } else {
      this.jogo6.pontosSelecao1 = 1;
      this.jogo6.pontosSelecao2 = 1;
      this.jogo6.empateSelecao1 = 1;
      this.jogo6.empateSelecao2 = 1;
      this.jogo6.vitoriaSelecao1 = 0;
      this.jogo6.vitoriaSelecao2 = 0;
      this.jogo6.derrotaSelecao1 = 0;
      this.jogo6.derrotaSelecao2 = 0;
    }
    this.atualizaTabela();
  }

  atualizaTabela(){
    this.atualizaSelecao1();
    this.atualizaSelecao2();
    this.atualizaSelecao3();
    this.atualizaSelecao4();
    // this.selecoes.push(this.selecao1);
    // this.selecoes.push(this.selecao2);
    // this.selecoes.push(this.selecao3);
    // this.selecoes.push(this.selecao4);
    console.log('this.selecoes');
    console.log(this.selecoes);
    this.selecoes.sort(this.compare);
    this.primeiro = this.selecoes[0];
    this.segundo = this.selecoes[1];
    this.terceiro = this.selecoes[2];
    this.quarto = this.selecoes[3];
  }

  compare(b: Selecao, a: Selecao){
    if (a.pontos > b.pontos) {
      return 1;
    } else if(a.pontos == b.pontos){
      if (a.sg > b.sg) {
        return 1;
      } else if (a.sg == b.sg) {
        if (a.gp > b.gp) {
          return 1
        } else if(a.gp == b.gp){
          return 0;
        } else {
          return -1;
        }
      } else {
        return -1;
      }
    } else {
      return -1;
    }
  }

  atualizaSelecao1(){
    this.selecao1.pontos = this.jogo1.pontosSelecao1 + this.jogo3.pontosSelecao1 + this.jogo5.pontosSelecao2;
    this.selecao1.vitorias = this.jogo1.vitoriaSelecao1 + this.jogo3.vitoriaSelecao1 + this.jogo5.vitoriaSelecao2;
    this.selecao1.empates = this.jogo1.empateSelecao1 + this.jogo3.empateSelecao1 + this.jogo5.empateSelecao2;
    this.selecao1.derrotas = this.jogo1.derrotaSelecao1 + this.jogo3.derrotaSelecao1 + this.jogo5.derrotaSelecao2;
    this.selecao1.gp = this.jogo1.placar1 + this.jogo3.placar1 + this.jogo5.placar2;
    this.selecao1.gc = this.jogo1.placar2 + this.jogo3.placar2 + this.jogo5.placar1;
    this.selecao1.sg = this.selecao1.gp - this.selecao1.gc;
  }

  atualizaSelecao2(){
    this.selecao2.pontos = this.jogo1.pontosSelecao2 + this.jogo4.pontosSelecao2 + this.jogo6.pontosSelecao1;
    this.selecao2.vitorias = this.jogo1.vitoriaSelecao2 + this.jogo4.vitoriaSelecao2 + this.jogo6.vitoriaSelecao1;
    this.selecao2.empates = this.jogo1.empateSelecao2 + this.jogo4.empateSelecao2 + this.jogo6.empateSelecao1;
    this.selecao2.derrotas = this.jogo1.derrotaSelecao2 + this.jogo4.derrotaSelecao2 + this.jogo6.derrotaSelecao1;
    this.selecao2.gp = this.jogo1.placar2 + this.jogo4.placar2 + this.jogo6.placar1;
    this.selecao2.gc = this.jogo1.placar1 + this.jogo4.placar1 + this.jogo6.placar2;
    this.selecao2.sg = this.selecao2.gp - this.selecao2.gc;
  }

  atualizaSelecao3(){
    this.selecao3.pontos = this.jogo2.pontosSelecao1 + this.jogo3.pontosSelecao2 + this.jogo6.pontosSelecao2;
    this.selecao3.vitorias = this.jogo2.vitoriaSelecao1 + this.jogo3.vitoriaSelecao2 + this.jogo6.vitoriaSelecao2;
    this.selecao3.empates = this.jogo2.empateSelecao1 + this.jogo3.empateSelecao2 + this.jogo6.empateSelecao2;
    this.selecao3.derrotas = this.jogo2.derrotaSelecao1 + this.jogo3.derrotaSelecao2 + this.jogo6.derrotaSelecao2;
    this.selecao3.gp = this.jogo2.placar1 + this.jogo3.placar2 + this.jogo6.placar2;
    this.selecao3.gc = this.jogo2.placar2 + this.jogo3.placar1 + this.jogo6.placar1;
    this.selecao3.sg = this.selecao3.gp - this.selecao3.gc;
  }

  atualizaSelecao4(){
    this.selecao4.pontos = this.jogo2.pontosSelecao2 + this.jogo4.pontosSelecao1 + this.jogo5.pontosSelecao1;
    this.selecao4.vitorias = this.jogo2.vitoriaSelecao2 + this.jogo4.vitoriaSelecao1 + this.jogo5.vitoriaSelecao1;
    this.selecao4.empates = this.jogo2.empateSelecao2 + this.jogo4.empateSelecao1 + this.jogo5.empateSelecao1;
    this.selecao4.derrotas = this.jogo2.derrotaSelecao2 + this.jogo4.derrotaSelecao1 + this.jogo5.derrotaSelecao1;
    this.selecao4.gp = this.jogo2.placar2 + this.jogo4.placar1 + this.jogo5.placar1;
    this.selecao4.gc = this.jogo2.placar1 + this.jogo4.placar2 + this.jogo5.placar2;
    this.selecao4.sg = this.selecao4.gp - this.selecao4.gc;
  }


}
