import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';
import { Course } from './course';

@Directive({
  selector: '[appNewCourse]'
})
export class NewCourseDirective implements OnInit {
  @Input() appNewCourse: Course;

  constructor(public el: ElementRef, public renderer: Renderer) {}

  ngOnInit() {
    const createdDate = this.appNewCourse.date;
    const currentDate  = new Date();
    const days = currentDate.getDate() - 14;

    if (createdDate < currentDate && createdDate >= new Date(currentDate.setDate(days))) {
      this.renderer.setElementStyle(this.el.nativeElement, 'border-color', '#a3c644');
    } else if (createdDate > currentDate) {
      this.renderer.setElementStyle(this.el.nativeElement, 'border-color', '#84d7d1');
    }
  }
}
