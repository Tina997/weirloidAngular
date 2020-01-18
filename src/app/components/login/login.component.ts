import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  errorMessage: string;

  logginForm = new FormGroup({
    email : new FormControl(),
    password : new FormControl()
  });

  constructor(private authService: AuthService) { }
 
  ngOnInit() {
  }

  tryLoggin(value){
    this.authService.doLoggin(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      window.location.href = ""
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }

}
