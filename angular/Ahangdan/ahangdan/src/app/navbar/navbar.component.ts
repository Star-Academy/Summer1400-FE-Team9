import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  public localStorageItem(id: string): string {
    return localStorage.getItem(id) ?? "";
  }

  async registerButtonTapped() {
    if (this.localStorageItem('is-logged-in') == 'true') {
      this.authService.logout();
      await this.router.navigateByUrl("home");
    } else {
      await this.router.navigateByUrl("register-form");
    }
  }
}
