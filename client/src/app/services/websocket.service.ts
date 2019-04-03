import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;
  public user: User = null;

  constructor(private socket: Socket) {
    this.loadStorage();
    this.checkStatus();
  }

  checkStatus() {
    this.socket.on('connect', () => {
      this.socketStatus = true;
      this.loadStorage();
    });
    this.socket.on('disconnect', () => {
      this.socketStatus = false;
    });
  }

  getUser() {
    return this.user;
  }

  emit(event: string, payload?: any, callback?: any) {
    this.socket.emit(event, payload, callback);
  }

  listen(event: string) {
    return this.socket.fromEvent(event);
  }

  loginWS(nombre: string) {
    return new Promise((resolve, reject) => {
      this.socket.emit('user-config', {nombre}, () => {
        this.user = new User(nombre);
        this.saveStorage();
        resolve();
      });
    });
  }

  saveStorage() {
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  loadStorage() {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.loginWS(this.user.nombre);
    }
  }

}
