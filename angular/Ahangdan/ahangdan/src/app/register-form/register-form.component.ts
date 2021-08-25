import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss', '../login-form.component.scss']
})
export class RegisterFormComponent {
  username = "";
  email = "";
  password = "";
  repeatedPassword = "";

  constructor(private router: Router, private authService: AuthService) { }

  async registerTapped(): Promise<void> {
    if (this.password !== this.repeatedPassword) {
      alert("Passwords don't match"); // TODO: Better alert
      return;
    }
    try {
      await this.authService.register(this.email, this.password);
      await this.router.navigateByUrl("login-page");
    } catch {
      alert("An error has occurred. Please try again."); // TODO: Better alert
    }
  }
}
