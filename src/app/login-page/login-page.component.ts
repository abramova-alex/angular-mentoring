import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [AuthService]
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(loginString: string, passwordString: string) {
    console.log(`loginString ${loginString}`);
    console.log(`passwordString ${passwordString}`);
    this.authService.login();
  }

}
