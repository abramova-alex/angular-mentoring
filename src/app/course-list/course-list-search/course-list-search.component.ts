import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-list-search',
  templateUrl: './course-list-search.component.html',
  styleUrls: ['./course-list-search.component.scss']
})
export class CourseListSearchComponent implements OnInit {
  @Output()
  onFind: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('courseSearch onInit');
  }

  findCourse(searchString: string) {
    this.onFind.emit(searchString);
    console.log(searchString);
  }

}
