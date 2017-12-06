import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  @Input()
  course: Course;

  @Output()
  onRemove: EventEmitter<Course> = new EventEmitter();

  @Output()
  onEdit: EventEmitter<Course> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  removeCourse(course: Course) {
    this.onRemove.emit(course);
  }

  editCourse(course: Course) {
    this.onEdit.emit(course);
  }

}
