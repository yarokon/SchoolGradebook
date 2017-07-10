import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { StudentService } from '../student-data/student.service';
import { Student } from '../student-data/student';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit, OnDestroy {
  students: Student[];
  private subscription: Subscription;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents();

    this.subscription = this.studentService.studentPipeline
      .subscribe((student: Student) => {
        this.students.push(student);
      });
  }

  getStudents(): void {
    this.studentService.getStudents()
      .then(res => this.students = res);
  }

  deleteStudent(id: string): void {
    this.studentService.deleteStudent(id)
      .then(() => {
        this.students = this.students.filter((student: Student) => {
          return student._id !== id;
        });
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
