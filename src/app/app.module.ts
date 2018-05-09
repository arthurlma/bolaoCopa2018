import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { PalpitesComponent } from './palpites/palpites.component';
import { PalpitesMataMataComponent } from './palpites-mata-mata/palpites-mata-mata.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { PalpitesGrupoComponent } from './palpites-grupo/palpites-grupo.component';


const appRoutes: Routes = [
  {path: 'palpite', component: PalpitesComponent},
  //{path: '', component: },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    PalpitesComponent,
    PalpitesMataMataComponent,
    PalpitesGrupoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
