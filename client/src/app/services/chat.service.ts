import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(public webSocketService: WebsocketService) { }

  sendMessage(nombre: string, msg: string) {
    const payload = {
      de: nombre,
      body: msg
    };
    console.log(payload);
    this.webSocketService.emit('message', payload);
  }

  getMessages() {
    return this.webSocketService.listen('new-message');
  }
}
