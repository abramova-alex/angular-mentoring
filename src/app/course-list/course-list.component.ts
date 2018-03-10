import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseDataService } from '../course-data.service';
import { Course } from '../course';
import { FindByNamePipe } from '../find-by-name.pipe';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  providers: [CourseDataService]
})
export class CourseListComponent implements OnInit, OnDestroy {
  courses: Course[];
  noCourseText: string;
  private subscriptionDeleteCourses: ISubscription;
  private subscriptionEditCourses: ISubscription;
  private subscriptionAddCourses: ISubscription;
  private subscriptionGetCourses: ISubscription;

  constructor(private courseDataService: CourseDataService) {
    this.noCourseText = 'No data. Feel free to add new course';
  }

  onRemove(course: Course) {
    const result = confirm('Do you really want to delete this course? ');

    if (result) {
      this.subscriptionDeleteCourses = this.courseDataService
        .deleteCourse(course.id)
        .subscribe(
          (_) => {
            this.courses = this.courses.filter((t) => t.id !== course.id);
          }
        );
    }
  }

  onEdit(course: Course) {
    this.subscriptionEditCourses = this.courseDataService
      .editCourse(course)
      .subscribe(
        (updatedCourse) => {
          course = updatedCourse;
        }
      );
  }

  onFind(searchString: string) {
    this.courses = new FindByNamePipe().transform(this.courses, searchString);
  }

  addCourse() {
    const id = new Date().valueOf();
    const testCourse = new Course(id, `${id} Course` , 90, new Date(),
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Cras malesuada cursus faucibus. Morbi eget leo pharetra, aliquet velit in, laoreet velit.
      Quisque venenatis dictum nisl id euismod. Donec bibendum volutpat ligula, ac volutpat quam egestas
      non. Aliquam erat volutpat. Ut auctor lacus vitae laoreet faucibus. Suspendisse posuere
      nec leo et vestibulum. Orci varius natoque penatibus et magnis dis parturient montes,
      nascetur ridiculus mus. Praesent eu volutpat dolor. Praesent vitae vulputate lacus,
      eu porta magna. Sed dignissim erat ut justo viverra efficitur. Sed dictum consectetur dignissim.`, true);

    this.subscriptionAddCourses = this.courseDataService
      .addCourse(testCourse)
      .subscribe(
        (newCourse) => {
          this.courses = this.courses.concat(newCourse);
        }
      );
  }

  ngOnInit() {
    this.subscriptionGetCourses = this.courseDataService
      .getCourses()
      .subscribe(
        (courses) => {
          this.courses = courses;
          console.log('courses comp', courses);
        }
      );
  }

  ngOnDestroy() {
    this.subscriptionGetCourses.unsubscribe();
    this.subscriptionAddCourses.unsubscribe();
    this.subscriptionEditCourses.unsubscribe();
    this.subscriptionDeleteCourses.unsubscribe();
  }

}
