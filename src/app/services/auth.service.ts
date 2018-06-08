import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { firebase } from '@firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { switchMap} from 'rxjs/operators';


interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
}

@Injectable()
export class AuthService {
  user: Observable<User>;
  userDetails: User = null;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    afs.firestore.settings({ timestampsInSnapshots: true });
    //// Get auth data, then get firestore user document || null
   this.user = this.afAuth.authState
   .switchMap(user => {
     if (user) {
       return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
     } else {
       return null;
     }
   })
   
   this.user.subscribe(
     (user) => {
       if (user) {
         this.userDetails = user;
         console.log(this.userDetails);
       } else{
         this.userDetails = null;
       }
     }
   );
  }

  signInWithFacebook() {
    console.log('authservice: facebook');
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.oAuthLogin(provider);
  }

  signInWithGoogle() {
    console.log('authservice: google');
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  signInRegular(email, password) {
    console.log('authservice: email');
    const credential = firebase.auth.EmailAuthProvider.credential( email, password );
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user)
      })
  }

  private updateUserData(user) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }

    return userRef.set(data, { merge: true })

  }

  isLoggedIn() {
  if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }


  logout() {
    this.afAuth.auth.signOut()
    .then((res) => this.router.navigate(['/']));
  }

}
