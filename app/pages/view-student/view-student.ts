import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Student} from '../../components/student/student';

@Component({
  templateUrl: 'build/pages/view-student/view-student.html',
})
export class ViewStudentPage {

  student;

  constructor(private navCtrl: NavController, private params: NavParams) {

  }

  ngOnInit(){
    this.student = this.params.data;
  }

}
