import { Component, OnInit } from '@angular/core';
import {CourseDataService} from '../course-data.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  providers: [CourseDataService]
})
export class CourseListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
