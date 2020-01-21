import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ShoppingCartService } from '../../services/shoppingCart/shopping-cart.service';
import { AuthService } from '../../services/auth/auth.service';

//Paypal
declare let paypal: any;

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, AfterViewChecked  {

  items = [];
  totalCompra : number = 0;
  userName: string;

  //Paypal
  addScript: boolean = false;
  paypalLoad: boolean = true;
  
  constructor(private authservice: AuthService, private shoppingCartService: ShoppingCartService) {
    this.authservice.getAuthUserName().then(res =>
      this.userName = res);
  }

  ngOnInit() {
    this.items = this.shoppingCartService.getCartItems();
    this.totalCompra = this.shoppingCartService.getTotal();
    console.log(this.totalCompra);
  }

  //Paypal
  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AVYNfUgAMRiC40v0Kzom1D08x3KHBbNg5JU94Y8wEWeKMn4C8Joy12ZYaH6ndfierSlPAhXh113fAqUO',
      //production: '<your-production-key here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.totalCompra, currency: 'EUR' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
      })
    }
  };
 
  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-button');
        this.paypalLoad = false;
      })
    }
  }
  
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }


}
