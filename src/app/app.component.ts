import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthService]
})
export class AppComponent implements OnInit {
  isLogin = false;

  constructor(private authService: AuthService) {
  }

  isAddPage(): boolean {
    return false;
  }

  ngOnInit() {
    this.authService.isAuthenticated().subscribe((res) => {
      this.isLogin = res;
    });
  }
 }
