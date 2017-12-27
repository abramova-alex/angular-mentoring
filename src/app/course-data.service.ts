import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable()
export class CourseDataService {
  id = 0;

  courses: Course[] = [new Course(this.id++, 'First Course', 45, new Date('Dec 31, 2016'),
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Cras malesuada cursus faucibus. Morbi eget leo pharetra, aliquet velit in, laoreet velit.
      Quisque venenatis dictum nisl id euismod. Donec bibendum volutpat ligula, ac volutpat quam egestas
      non. Aliquam erat volutpat. Ut auctor lacus vitae laoreet faucibus. Suspendisse posuere
      nec leo et vestibulum. Orci varius natoque penatibus et magnis dis parturient montes,
      nascetur ridiculus mus. Praesent eu volutpat dolor. Praesent vitae vulputate lacus,
      eu porta magna. Sed dignissim erat ut justo viverra efficitur. Sed dictum consectetur dignissim.`),
    new Course(this.id++, 'Second Course', 125, new Date(), `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Cras malesuada cursus faucibus. Morbi eget leo pharetra, aliquet velit in, laoreet velit.
      Quisque venenatis dictum nisl id euismod. Donec bibendum volutpat ligula, ac volutpat quam egestas
      non. Aliquam erat volutpat. Ut auctor lacus vitae laoreet faucibus. Suspendisse posuere
      nec leo et vestibulum. Orci varius natoque penatibus et magnis dis parturient montes,
      nascetur ridiculus mus. Praesent eu volutpat dolor. Praesent vitae vulputate lacus,
      eu porta magna. Sed dignissim erat ut justo viverra efficitur. Sed dictum consectetur dignissim.`)];

  constructor() { }

  addCourse(course: Course): CourseDataService {
    this.courses.push(course);

    return this;
  }

  deleteCourse(id: number): CourseDataService {
    const index = this.courses.indexOf(this.getCourseById(id));
    this.courses.splice(index, 1);

    return this;
  }

  editCourse(id: number,
             values: Object = {name: 'test name'}): CourseDataService {
    const course = this.getCourseById(id);
    const index = this.courses.indexOf(course);

    if (!course) {
      return this;
    }

    Object.assign(course, values);
    this.courses[index] = course;

    return this;
  }

  getCourseById(id: number): Course {
    return this.courses
      .filter(course => {
        return course.id === id;
      })
      .pop();
  }

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseByName(name: string): Course {
    return this.courses
      .filter(course => {
        return course.name === name;
      })
      .pop();
  }

  // TODO: delete after implementing real id
  getId(): number {
    return this.id++;
  }
}
