import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  usersActiveObs: Observable<any>;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.usersActiveObs = this.chatService.getActiveUsers();
  }
}
