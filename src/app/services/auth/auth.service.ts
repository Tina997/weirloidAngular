import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

import { UserInterface } from '../../models/user';
import { map, first } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user: firebase.User;

  constructor(public afAuth: AngularFireAuth, private af: AngularFirestore) { 
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        this.userName = user.email;
      } else {
        this.userName = null;
      }
    });
  }

  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(userData => {
        resolve(userData);
        this.updateUserData(userData.user);
      }).catch(err => console.log(reject(err)))
    })
  }

  doLoggin(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }

  logoutUser() {
    return this.afAuth.auth.signOut();
  }

  isAuth() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  isUserAdmin(userUid) {
    return this.af.doc<UserInterface>(`users/${userUid}`).valueChanges();
  }

  isLoggedIn() {
    return this.afAuth.authState.pipe(first()).toPromise();
 }

  async getAuthUserName() {
    const user = await this.isLoggedIn()
    if (user) {
      return user.email
    } else {
      return null;
    }
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.af.doc(`users/${user.uid}`);
    const data: UserInterface = {
      id: user.uid,
      email: user.email,
      roles: {
        normal: true
      }
    }
    return userRef.set(data, { merge: true })
  }

}

