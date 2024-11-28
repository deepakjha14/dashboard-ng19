import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard';
  isMorning: boolean = false;
  salutations: any = [
    {
      id: 1,
      message: 'Good Morning'
    },
    {
      id: 2,
      message: 'Good Afternoon'
    },
    {
      id: 3,
      message: 'Good Evening'
    },
    {
      id: 4,
      message: 'Good Night'
    }
  ];

  morningToggle(): void {
    this.isMorning = !this.isMorning;
  }
}
