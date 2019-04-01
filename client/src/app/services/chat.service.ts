import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(public webSocketService: WebsocketService) { }

  sendMessage(msg: string) {
    const payload = {
      de: 'Joni',
      body: msg
    };
    this.webSocketService.emit('message', payload);
  }

  getMessages() {
    return this.webSocketService.listen('new-message');
  }
}
