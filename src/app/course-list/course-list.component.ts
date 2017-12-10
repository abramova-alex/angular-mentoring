import { Component, OnInit } from '@angular/core';
import { CourseDataService } from '../course-data.service';
import { Course } from '../course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  providers: [CourseDataService]
})
export class CourseListComponent implements OnInit {
  courses: Course[];

  constructor(private courseDataService: CourseDataService) {
  }

  onRemove(course: Course) {
    const result = confirm('Do you really want to delete this course? ');

    if (result) {
      this.courseDataService.deleteCourse(course.id);
    }
  }

  onEdit(course: Course, values: Object) {
    this.courseDataService.editCourse(course.id, values);
  }

  addCourse() {
    const id = this.courseDataService.getId();
    const testCourse = new Course(id, `${id} Course` , 35, new Date(), `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Cras malesuada cursus faucibus. Morbi eget leo pharetra, aliquet velit in, laoreet velit.
      Quisque venenatis dictum nisl id euismod. Donec bibendum volutpat ligula, ac volutpat quam egestas
      non. Aliquam erat volutpat. Ut auctor lacus vitae laoreet faucibus. Suspendisse posuere
      nec leo et vestibulum. Orci varius natoque penatibus et magnis dis parturient montes,
      nascetur ridiculus mus. Praesent eu volutpat dolor. Praesent vitae vulputate lacus,
      eu porta magna. Sed dignissim erat ut justo viverra efficitur. Sed dictum consectetur dignissim.`);

    this.courseDataService.addCourse(testCourse);
  }

  ngOnInit() {
    this.courses = this.courseDataService.getCourses();
  }

}
