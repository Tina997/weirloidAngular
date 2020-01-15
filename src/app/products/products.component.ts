import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';

@Component({
  selector: 'products-root',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products = [];
  constructor(
    private firestoreService: FirestoreService
  ) { }
  ngOnInit() {
    this.firestoreService.getCats().subscribe((productsSnapshot) => {
      this.products = [];
      productsSnapshot.forEach((productData: any) => {
        this.products.push({
          id: productData.payload.doc.id,
          data: productData.payload.doc.data()
        });
      })
    });
  }
}
