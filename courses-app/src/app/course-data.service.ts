import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable()
export class CourseDataService {

  courses: Course[] = [];

  constructor() { }

  addCourse(course: Course): CourseDataService {
    //some logic
    console.log('add course');

    return this;
  }

  deleteCourse(id: number): CourseDataService {
    //some logic
    console.log('delete course');

    return this;
  }

  editCourse(id: number,
             values: Object = {}): Course {
    let course = this.getCourse(id);
    //some logic
    console.log('edit course');

    return course;
  }

  getCourse(id: number): Course {
    return this.courses
      .filter(course => {
        console.log('get course');
        return course.id === id;
      })
      .pop();
  }

  getCourseByName(name: string): Course {
    return this.courses
      .filter(course => {
        console.log('get course');
        return course.name === name;
      })
      .pop();
  }
}
