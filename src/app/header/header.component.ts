import { Component } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public snackBar: MdSnackBar) { }

  openSnackBar() {
    this.snackBar.open('Do you like this app?', 'Yes', {
      duration: 10e3,
    });
  }
}
