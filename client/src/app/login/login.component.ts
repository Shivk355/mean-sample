import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authService.loginUser(this.loginData);
  }

}
