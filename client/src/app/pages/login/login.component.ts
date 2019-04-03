import { Component } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  nombre = '';

  constructor(public webSocketService: WebsocketService, private router: Router) { }

  login() {
    this.webSocketService.loginWS(this.nombre).then( () => {
      this.router.navigateByUrl('/chat');
    });
  }

}
