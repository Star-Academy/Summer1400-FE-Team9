import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss', '../login-form.component.scss']
})
export class RegisterFormComponent {
  public username = "";
  public email = "";
  public password = "";
  public repeatedPassword = "";

  constructor(private router: Router, private authService: AuthService, private snackBar: MatSnackBar) { }

  async registerTapped(): Promise<void> {
    if (this.password !== this.repeatedPassword) {
      this.snackBar.open("Passwords don't match", "OK");
      return;
    }
    try {
      await this.authService.register(this.email, this.password);
      await this.router.navigateByUrl("login-page");
    } catch {
      this.snackBar.open("An error has occurred. Please try again.", "OK");
    }
  }
}
