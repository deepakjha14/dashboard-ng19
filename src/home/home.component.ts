import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../app/shared/shared.service';
import { CommonModule, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { JsgigsPipe } from '../app/shared/pipe/jsgigs.pipe';

@Component({
  selector: 'dashboard-ng19-home',
  imports: [FormsModule, CommonModule, JsgigsPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  login: any = {
    username: '',
    password: ''
  };

  fullName: string = 'John Doe';
  todayDate: Date = new Date();
  aboutFormData: any;

  sharedService: any = inject(SharedService);

  constructor(
  ) {
    this.aboutFormData = this.sharedService.getFormDetails();
  }

  onClick() {
    alert("User name is - "+this.login.username+" and password is - "+this.login.password);
  }
}
