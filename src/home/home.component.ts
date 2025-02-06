import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../app/shared/shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dashboard-ng19-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  login: any = {
    username: '',
    password: ''
  };

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
