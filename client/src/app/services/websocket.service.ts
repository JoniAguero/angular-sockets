import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;

  constructor(private socket: Socket) {
    this.checkStatus();
  }

  checkStatus() {
    this.socket.on('connect', () => {
      console.log(`Conectado al servidor`);
      this.socketStatus = true;
    });
    this.socket.on('disconnect', () => {
      console.log(`Desconectado del servidor`);
      this.socketStatus = false;
    });
  }

  emit(type: string, payload?: any, callback?: any) {
    this.socket.emit(type, payload, callback);
  }

}
