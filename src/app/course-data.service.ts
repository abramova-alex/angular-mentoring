import { Injectable } from '@angular/core';
import { Course } from './course';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CourseDataService {

  courses: Course[] = [];

  constructor(
    private api: ApiService
  ) { }

  addCourse(course: Course): Observable<Course> {
    return this.api.addCourse(course);
  }

  deleteCourse(id: number): Observable<Course> {
    return this.api.deleteCourse(id);
  }

  editCourse(course: Course): Observable<Course> {
    return this.api.editCourse(course);
  }

  getCourseById(id: number): Observable<Course> {
    return this.api.getCourseById(id);
  }

  getCourses(): Observable<Course[]> {
    return this.api.getCourses()
      .map(response => {
        return response.filter((course) => {
          return course.date.valueOf() > new Date().valueOf() - 14 * 1000 * 60 * 60 * 24;
        });
    });
  }

  // getCourseByName(name: string): Course {
  //   return this.courses
  //     .filter(course => {
  //       return course.name === name;
  //     })
  //     .pop();
  // }
}
