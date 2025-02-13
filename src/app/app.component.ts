import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = "Dashboard in bootstrap 5";
  isSidebarOpen: boolean = true;

  onSidebarToggle() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
