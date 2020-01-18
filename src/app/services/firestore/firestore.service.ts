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
  //Crea un nuevo gato
  public createCat(data: {nombre: string, url: string}) {
    return this.firestore.collection('cats').add(data);
  }
  //Obtiene un gato
  public getProduct(documentId: string) {
    return this.firestore.collection('products').doc(documentId).valueChanges();
  }
  //Obtiene todos los gatos
  public getProducts() {
    return this.firestore.collection('products').snapshotChanges();
  }
}
