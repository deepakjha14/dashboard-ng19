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

  onLogin() {
    window.location.href = 'https://decskwgb8e.execute-api.ap-south-1.amazonaws.com/auth/login';
  }

  onLogout() {
    sessionStorage.removeItem("auth_token");
    sessionStorage.clear();
    window.location.href = 'https://ap-south-1x93mb0mlc.auth.ap-south-1.amazoncognito.com/logout?client_id=71m5gl0i06u5r5b74k0g48t2mv';
  }

  checkLogin() {
    if (sessionStorage.getItem("auth_token")) {
      return true;
    }

    return false;
  }
}
