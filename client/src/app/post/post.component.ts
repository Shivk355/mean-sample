import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postMessage = {};
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  sendPost(){
    this.apiService.savePost(this.postMessage);
  }

}
