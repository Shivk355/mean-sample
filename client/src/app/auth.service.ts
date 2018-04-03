import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class AuthService {
  path = environment.path + '/auth';
  TOKEN_KEY = 'token';
  constructor(private http: HttpClient) { }
 
  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get isAuthenticated(){
    return localStorage.getItem(this.TOKEN_KEY);
  }

    registerUser(userData) {
    this.http.post<any>(this.path + '/register', userData).subscribe(res => {
      this.saveToken(res.token);
    })
  }

  loginUser(loginData) {
    this.http.post<any>(this.path + '/login', loginData).subscribe(res => {
      this.saveToken(res.token);
    });
  }

  logout(){
    localStorage.removeItem(this.TOKEN_KEY);
  }

  saveToken(token){
    localStorage.setItem(this.TOKEN_KEY, token);
  }

}
