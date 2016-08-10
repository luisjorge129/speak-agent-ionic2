import { Component, Input } from '@angular/core';
import {NavController} from 'ionic-angular';
import {ViewStudentPage} from '../../pages/view-student/view-student';

@Component({
  selector: 'student',
  templateUrl: 'build/components/student/student.html'
})
export class Student {

  @Input() student;

  constructor(private nav: NavController) {
  }

  view(){
    this.nav.push(ViewStudentPage, this.student);
  }
}
