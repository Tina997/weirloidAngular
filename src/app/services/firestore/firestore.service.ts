import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  public products = [];
    constructor(
    private firestore: AngularFirestore
  ) {}
  
  //Obtiene un gato
  public getProduct(documentId: string) {
    return this.firestore.collection('products').doc(documentId).valueChanges();
  }
  //Obtiene todos los gatos
  public getProducts() {
    return this.firestore.collection('products').snapshotChanges();
  }
}
