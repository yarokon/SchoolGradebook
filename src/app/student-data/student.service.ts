import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

import { Student } from './student';

@Injectable()
export class StudentService {
  studentPipeline = new Subject<Student>();

  // private devModeUrl = '';
  private devModeUrl = 'http://localhost:3000/';
  private studentsUrl = `${this.devModeUrl}api/student`;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getStudents(): Promise<Student[]> {
    return this.http.get(this.studentsUrl)
      .toPromise()
      .then(res => res.json() as Student[])
      .catch(this.handleError);
  }

  addStudent(student: Student): Promise<Student> {
    return this.http
      .post(this.studentsUrl, JSON.stringify(student), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Student)
      .catch(this.handleError);
  }

  deleteStudent(id: string): Promise<void> {
    const url = `${this.studentsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
