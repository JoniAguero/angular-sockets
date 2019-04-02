import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  nombre: string;

  constructor() { }

  login() {
    console.log(this.nombre);
  }

}
