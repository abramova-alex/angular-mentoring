import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  logoUrl: string;
  logoText: string;

  constructor() {
    this.logoText = 'Courses';
    this.logoUrl = 'assets/images/logo.jpg';
  }

  ngOnInit() {
  }

}
