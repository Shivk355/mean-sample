import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable()
export class ApiService {
  profile: any;
  users = [];
  messages = [];
  path = environment.path;
  constructor(private http: HttpClient) { }
 
  getMessages(userId) {
    this.http.get<any>(this.path + '/posts/' + userId).subscribe(res => {
      this.messages = res;
    });
  }

  getUsers() {
    this.http.get<any>(this.path + '/users').subscribe(res => {
      this.users = res;
    });
  }
  
  getProfile(id) {
    this.http.get(this.path + '/profile/'+id).subscribe(res => {
      this.profile = res;
    });
  }

  savePost(msg){
    this.http.post(this.path + '/post', msg).subscribe(res => {
    });
  }

}
