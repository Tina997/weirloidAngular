import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../services/firestore/firestore.service';
import { FormGroup, FormControl} from '@angular/forms';
import { ShoppingCartService } from '../services/shoppingCart/shopping-cart.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: any;
  id : any;

  addToCartForm = new FormGroup({
    itemId : new FormControl(),
    itemPrice : new FormControl(),
    quantity : new FormControl()
  });

  constructor(
    private route: ActivatedRoute,
    private firestoreService: FirestoreService,
    private shoppingCartService: ShoppingCartService){ 

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

  addToCart(value){
    //console.log(value);
    this.shoppingCartService.addToCart(value);
    
  }


}
