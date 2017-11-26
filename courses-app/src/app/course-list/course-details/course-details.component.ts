import { Component, OnInit } from '@angular/core';
import { Course } from '../../course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  course: Course;

  constructor() {
    this.course = new Course(1,'First Course', 45, new Date(), `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Cras malesuada cursus faucibus. Morbi eget leo pharetra, aliquet velit in, laoreet velit.
      Quisque venenatis dictum nisl id euismod. Donec bibendum volutpat ligula, ac volutpat quam egestas
      non. Aliquam erat volutpat. Ut auctor lacus vitae laoreet faucibus. Suspendisse posuere
      nec leo et vestibulum. Orci varius natoque penatibus et magnis dis parturient montes,
      nascetur ridiculus mus. Praesent eu volutpat dolor. Praesent vitae vulputate lacus,
      eu porta magna. Sed dignissim erat ut justo viverra efficitur. Sed dictum consectetur dignissim.`);
  }

  ngOnInit() {
  }

}
