import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response } from '@angular/http';
import { Course } from './course';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) { }

  getCourses(): Observable<Course[]> {
    return this.http
      .get(API_URL + '/courses')
      .map(response => {
        const courses = response.json();
        return courses.map((course) => {
          return new Course(course.id, course.name, course.duration, new Date(course.date),
            course.info, course.topRated);
        });
      })
      .catch(this.handleError);
  }

  getCourseById(courseId: number): Observable<Course> {
    return this.http
      .get(API_URL + '/courses/' + courseId)
      .map(response => {
        return new Course(response.json().id, response.json().name, response.json().duration,
          new Date(response.json().date), response.json().info, response.json().topRated);
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  addCourse(course: Course): Observable<Course> {
    return this.http
      .post(API_URL + '/courses', course)
      .map(response => {
        return new Course(response.json().id, response.json().name, response.json().duration,
          new Date(response.json().date), response.json().info, response.json().topRated);
      })
      .catch(this.handleError);
  }

  editCourse(course: Course): Observable<Course> {
    return this.http
      .put(API_URL + '/courses/' + course.id, course)
      .map(response => {
        return new Course(response.json().id, response.json().name, response.json().duration,
          new Date(response.json().date), response.json().info, response.json().topRated);
      })
      .catch(this.handleError);
  }

  deleteCourse(courseId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/courses/' + courseId)
      .map(response => null)
      .catch(this.handleError);
  }
}
