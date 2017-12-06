import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-app-footer',
  templateUrl: './courses-app-footer.component.html',
  styleUrls: ['./courses-app-footer.component.scss']
})
export class CoursesAppFooterComponent implements OnInit {
  text: string;

  constructor() {
    this.text = 'Copyright 2017';
  }

  ngOnInit() {
  }

}
