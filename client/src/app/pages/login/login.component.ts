import { Component } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  nombre = '';

  constructor(public webSocketService: WebsocketService) { }

  login() {
    this.webSocketService.loginWS(this.nombre);
  }

}
