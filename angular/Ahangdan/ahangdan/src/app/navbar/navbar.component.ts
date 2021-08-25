import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public authService: AuthService, private router: Router) {
  }

  async registerButtonTapped(): Promise<void> {
    if (this.authService.isLoggedIn()) {
      this.authService.logout();
      await this.router.navigateByUrl("home");
    } else {
      await this.router.navigateByUrl("register-form");
    }
  }
}
