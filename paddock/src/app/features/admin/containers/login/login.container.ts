import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.container.html',
  styleUrls: ['./login.container.scss']
})
export class LoginContainer implements OnInit {

  constructor(private loginService: LoginService) { }

  onLoginClicked() {
    this.loginService.logIn();
  }

  ngOnInit(): void {
  }

}
