import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public localStorageItem(id: string): string {
    return localStorage.getItem(id) ?? "";
  }

  async primaryButtonTapped() {
    if (this.localStorageItem('is-logged-in') == 'true') {
      await this.router.navigateByUrl("music-list-page");
    } else {
      await this.router.navigateByUrl("../register-form");
    }
  }
}
