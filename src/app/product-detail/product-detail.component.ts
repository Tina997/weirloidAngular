import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FirestoreService } from '../services/firestore/firestore.service';



import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductsComponent } from '../pages/products/products.component';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: any;
  id : any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firestoreService: FirestoreService) { 

    //Extraer id
    this.route.params
    .subscribe(params => {this.id = params['id']});

    //Extraer objeto
    this.firestoreService.getProduct(this.id).subscribe(product => {
      //console.log(product); 
      this.product = product;});

    }

  ngOnInit() {
    //console.log(this.product);
  }


}
