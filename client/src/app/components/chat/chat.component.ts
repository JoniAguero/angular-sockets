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
  element: HTMLElement;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.element = document.getElementById('chat-messages');
    this.messagesSuscription = this.chatService.getMessages().subscribe(msg => {
      this.messages.push(msg);
      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
      }, 50);
    });
  }

  ngOnDestroy(): void {
    this.messagesSuscription.unsubscribe();
  }

  send() {
    if (this.texto.trim().length === 0) {
      return;
    }
    this.chatService.sendMessage(this.texto);
    this.texto = '';
  }
}
