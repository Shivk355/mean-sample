import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registeredData = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  post(){
    this.authService.registerUser(this.registeredData);
  }

}
