import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cartProducts = [];
  total: number = 0;
 
  constructor() { }

  addToCart(value: any) {
    if(localStorage.getItem('cartProducts') == null){
      let cart = [];
      cart.push(JSON.stringify(value));
      localStorage.setItem('cartProducts', JSON.stringify(cart));
    }else{
      let cart: any = JSON.parse(localStorage.getItem('cartProducts'));
      cart.push(JSON.stringify(value));
      localStorage.setItem('cartProducts', JSON.stringify(cart)); 
    }
    location.reload();
  }

  getCartItems(){
    var tmp = JSON.parse(localStorage.getItem('cartProducts')); //JSON
    var products = [];
    for(var i = 0; i < tmp.length; i++){
      let item = JSON.parse(tmp[i]);
      products.push({
        name: item.itemId,
        price: item.itemPrice,
        quantity: item.quantity
      });
      this.total += item.quantity*item.itemPrice;
    }
    return products;
  }

  getItemCount(){
    if(localStorage.getItem('cartProducts') != null){
      var tmp = [];
      tmp = JSON.parse(localStorage.getItem('cartProducts'));
      return tmp.length;
    }else{
      return 0;
    }
    
  }

  getTotal(){
    return this.total;
  }

}
