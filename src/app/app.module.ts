import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesAppFooterComponent } from './courses-app-footer/courses-app-footer.component';
import { CoursesAppHeaderComponent } from './courses-app-header/courses-app-header.component';
import { LogoComponent } from './courses-app-header/logo/logo.component';
import { LoginComponent } from './courses-app-header/login/login.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-list/course-details/course-details.component';
import { CourseListSearchComponent } from './course-list/course-list-search/course-list-search.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewCourseDirective } from './new-course.directive';
import { FormatDurationPipe } from './format-duration.pipe';
import { OrderByPipe } from './order-by.pipe';
import { FindByNamePipe } from './find-by-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesAppFooterComponent,
    CoursesAppHeaderComponent,
    LogoComponent,
    LoginComponent,
    CourseListComponent,
    CourseDetailsComponent,
    CourseListSearchComponent,
    LoginPageComponent,
    NewCourseDirective,
    FormatDurationPipe,
    OrderByPipe,
    FindByNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
