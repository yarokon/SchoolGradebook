import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { StudentService } from '../student-data/student.service';
import { Student } from '../student-data/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent {
  constructor(private studentService: StudentService) { }

  onSubmit(form: NgForm) {
    this.studentService.addStudent(form.value)
      .then(student => {
        this.studentService.studentPipeline.next(student);
      });

    form.resetForm();
  }
}
