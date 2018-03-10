import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-courses-app-header',
  templateUrl: './courses-app-header.component.html',
  styleUrls: ['./courses-app-header.component.scss'],
  providers: [AuthService]
})
export class CoursesAppHeaderComponent implements OnInit {
  isLoginPage = false;

  constructor(private authService: AuthService ) { }

  ngOnInit() {
    this.authService.isAuthenticated()
      .subscribe((res) => {
        this.isLoginPage = res;
      });
  }
}
