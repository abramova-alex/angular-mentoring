import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './course';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(courses: Course[]): Course[] {
    if (!courses) {
      return courses;
    }

    return courses.sort((a: Course, b: Course) => b.date.getTime() - a.date.getTime());
  }

}
