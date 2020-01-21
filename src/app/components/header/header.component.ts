import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { ShoppingCartService } from 'src/app/services/shoppingCart/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  userName: string;
  itemCount: any;

  constructor(private authservice: AuthService, private shoppingCartService: ShoppingCartService) {
    this.authservice.getAuthUserName().then(res =>
      this.userName = res);
    this.itemCount = this.shoppingCartService.getItemCount();
  }

  ngOnInit() {
  }

  logout(){
    this.authservice.logoutUser();
    location.reload();
  }

}
