import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../home.component.scss']
})
export class HomeComponent {

  constructor(public authService: AuthService, private router: Router) { }

  async primaryButtonTapped(): Promise<void> {
    if (this.authService.isLoggedIn()) {
      await this.router.navigateByUrl("music-list-page");
    } else {
      await this.router.navigateByUrl("../register-form");
    }
  }
}
