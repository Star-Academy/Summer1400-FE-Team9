import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) {
  }

  public localStorageItem(id: string): string {
    return localStorage.getItem(id) ?? "";
  }

  async registerButtonTapped(): Promise<void> {
    if (this.localStorageItem('is-logged-in') == 'true') {
      this.authService.logout();
      await this.router.navigateByUrl("home");
    } else {
      await this.router.navigateByUrl("register-form");
    }
  }
}
