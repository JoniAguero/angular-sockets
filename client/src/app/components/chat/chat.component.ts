import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  texto = '';

  constructor(private chatService: ChatService) { }

  send() {
    this.chatService.sendMessage(this.texto);
    this.texto = '';
  }

}
