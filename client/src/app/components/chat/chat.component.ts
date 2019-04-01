import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  texto = '';
  messagesSuscription: Subscription;
  messages: any[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.messagesSuscription = this.chatService.getMessages().subscribe(msg => {
      this.messages.push(msg);
    });
  }

  ngOnDestroy(): void {
    this.messagesSuscription.unsubscribe();
  }

  send() {
    this.chatService.sendMessage(this.texto);
    this.texto = '';
  }

}
