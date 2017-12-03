import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list-search',
  templateUrl: './course-list-search.component.html',
  styleUrls: ['./course-list-search.component.scss']
})
export class CourseListSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('courseSearch onChange');
  }

  findCourse(searchString: string) {
    console.log(searchString);
  }

}