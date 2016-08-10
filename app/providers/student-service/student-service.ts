import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the StudentService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StudentService {

  constructor(private http: Http) {}

  getAllStudents(){
    return this.http
    .get("http://speakagentchallenge.herokuapp.com/api/students/?format=json")
    .map(response=>{
      return response.json()
    });
  }

}

