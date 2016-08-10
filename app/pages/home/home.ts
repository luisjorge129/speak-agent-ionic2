import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {StudentList} from '../../components/student-list/student-list'

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives:[StudentList]
})
export class HomePage {
  
  constructor(private navCtrl: NavController) {
  }

}
