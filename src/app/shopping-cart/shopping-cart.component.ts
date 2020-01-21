import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shoppingCart/shopping-cart.service';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items = [];
  totalCompra : number = 0;
  userName: string;

  constructor(private authservice: AuthService, private shoppingCartService: ShoppingCartService) {
    this.authservice.getAuthUserName().then(res =>
      this.userName = res);
  }

  ngOnInit() {
    this.items = this.shoppingCartService.getCartItems();
    this.totalCompra = this.shoppingCartService.getTotal();
    console.log(this.totalCompra);
  }


}
