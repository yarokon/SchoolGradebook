import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { StudentFormComponent } from './student-form/student-form.component';

import { StudentService } from './student-data/student.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentTableComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
