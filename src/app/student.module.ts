import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { StudentComponent } from 'app/component/student-component/student.component';
import { FirstCharUpCasePipe } from 'app/pipe/first-char-up-case.pipe';
import { SearchStudentPipe } from './pipe/search-student.pipe';

@NgModule({
  declarations: [
    StudentComponent,
    FirstCharUpCasePipe,
    SearchStudentPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [StudentComponent]
})
export class StudentModule { }
