import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  userName: string;

  constructor(private authservice: AuthService) {
    this.authservice.getAuthUserName().then(res =>
      this.userName = res);
  }

  ngOnInit() {
  }

  logout(){
    this.authservice.logoutUser();
    location.reload();
  }

}
