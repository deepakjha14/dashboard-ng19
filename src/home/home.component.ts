import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dashboard-ng19-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  login: any = {
    username: '',
    password: ''
  }

  onClick() {
    alert("User name is - "+this.login.username+" and password is - "+this.login.password);
  }
}
