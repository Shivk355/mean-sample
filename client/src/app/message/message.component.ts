import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private apiService: ApiService, private route: ActivatedRoute){}

  ngOnInit(){
    var userId = this.route.snapshot.params.id;
    this.apiService.getMessages(userId);
  }

}
