import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import * as fakeData from "../../public/sampleResponse.json";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard';
  users: any = fakeData?.users;
  isMorning: boolean = false;
  headerName!: string|undefined;
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
    this.headerName = this.isMorning? 'Deepak' : undefined;
    this.isMorning = !this.isMorning;
  }

  onMouseEnter(): void {
    alert('Hi');
  }

  onSalutation(evt: any): void {
    alert(evt);
  }
}
