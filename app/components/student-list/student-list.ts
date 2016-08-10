import { Component } from '@angular/core';
import {StudentService} from '../../providers/student-service/student-service';
import {Student} from '../student/student';

@Component({
  selector: 'student-list',
  templateUrl: 'build/components/student-list/student-list.html',
  providers: [StudentService],
  directives:[Student]
})
export class StudentList {

  studentList = [];

  

  constructor(private student: StudentService) {
  }

  ngOnInit(){
      this.student.getAllStudents().subscribe(students=>{
        this.studentList = students;
        console.log(this.studentList);
      });
    }

 
}
