import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthService]
})
export class AppComponent {
  constructor(private authService: AuthService) {
  }

  isLoginPage(): boolean {
    return this.authService.isAuthenticated();
  }
}
