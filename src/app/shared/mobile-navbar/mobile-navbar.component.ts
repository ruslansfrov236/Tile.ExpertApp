import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-navbar',
  standalone: false,
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.css']
})
export class MobileNavbarComponent {

  hamburgerToggle: boolean = false;
  navbarToggle: boolean = false;
  isSearchMobile: boolean = false;

  searchMobile() {
    this.isSearchMobile = !this.isSearchMobile;
  }

  toggleNavbar() {
    this.hamburgerToggle = !this.hamburgerToggle;
    this.navbarToggle = !this.navbarToggle;
    this.isSearchMobile =false
   if (this.navbarToggle) {
      setTimeout(() => {
        this.navbarToggle = false;
        this.hamburgerToggle = false;
      }, 2000);
    }
  }
}
