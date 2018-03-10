import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  currentUserName: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.login();
    this.authService.getUserInfo().subscribe(res => {
      this.currentUserName = res;
    });
  }

  logout() {
    this.currentUserName = '';
    this.authService.logout();
  }
}
