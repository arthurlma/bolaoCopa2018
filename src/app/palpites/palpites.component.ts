import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-palpites',
  templateUrl: './palpites.component.html',
  styleUrls: ['./palpites.component.css']
})
export class PalpitesComponent{
  title = 'app';
  primeiroA: string = null;
  segundoA: string = null;
  primeiroB: string = null;
  segundoB: string = null;
  primeiroC: string = null;
  segundoC: string = null;
  primeiroD: string = null;
  segundoD: string = null;
  primeiroE: string = null;
  segundoE: string = null;
  primeiroF: string = null;
  segundoF: string = null;
  primeiroG: string = null;
  segundoG: string = null;
  primeiroH: string = null;
  segundoH: string = null;
  // primeiroA: string = 'Russia';
  // segundoA: string = 'ArabiaSaudita';
  // primeiroB: string = 'Portugal';
  // segundoB: string = 'Espanha';
  // primeiroC: string = 'Franca';
  // segundoC: string = 'Australia';
  // primeiroD: string = 'Argentina';
  // segundoD: string = 'Islandia';
  // primeiroE: string = 'Brasil';
  // segundoE: string = 'Suica';
  // primeiroF: string = 'Alemanha';
  // segundoF: string = 'Mexico';
  // primeiroG: string = 'Belgica';
  // segundoG: string = 'Panama';
  // primeiroH: string = 'Polonia';
  // segundoH: string = 'Senegal';
  faseGrupo: boolean = true;

  itens: Observable<any[]>;
  text: string;
  lastid: any;

  constructor(private afs: AngularFirestore){
    this.itens = afs.collection('teste').valueChanges();
  }

  salvar(){
    this.lastid = this.afs.collection('teste').add({
      teste: this.text
    })
    console.log(this.lastid);
  }
}
