import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './course';

@Pipe({
  name: 'findByName'
})
export class FindByNamePipe implements PipeTransform {

  transform(courses: Course[], name: string): Course[] {
    if (!courses || !name) {
      return courses;
    }

    return courses.filter((course: Course) => course.name.toLowerCase().includes(name));
  }

}
