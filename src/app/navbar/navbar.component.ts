import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoginHidden: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isLoginHidden = localStorage.getItem("is-logged-in") == "true";
  }

  async registerButtonTapped() {
    if (this.isLoginHidden) {
      // logout
    } else {
      await this.router.navigateByUrl("register-form");
    }
  }
}
