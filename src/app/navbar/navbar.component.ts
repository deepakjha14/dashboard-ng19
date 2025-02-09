import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dashboard-ng19-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() sidebarToggle = new EventEmitter<boolean>();

  toggleSidebar: boolean = false;

  onButtonClick() {
    this.toggleSidebar = !this.toggleSidebar;
    this.sidebarToggle.emit(this.toggleSidebar);
  }
}
