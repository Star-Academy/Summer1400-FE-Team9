import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) { }

  public localStorageItem(id: string): string {
    return localStorage.getItem(id) ?? "";
  }

  async primaryButtonTapped(): Promise<void> {
    if (this.localStorageItem('is-logged-in') == 'true') {
      await this.router.navigateByUrl("music-list-page");
    } else {
      await this.router.navigateByUrl("../register-form");
    }
  }
}
