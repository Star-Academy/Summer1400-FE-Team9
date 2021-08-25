import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../login-form.component.scss']
})
export class LoginFormComponent {
  public email = "";
  public password = "";

  constructor(private router: Router, private authService: AuthService, private snackBar: MatSnackBar) { }

  public async loginTapped(): Promise<void> {
    try {
      await this.authService.login(this.email, this.password);
      await this.router.navigateByUrl("home");
    } catch {
      this.snackBar.open("An error has occurred. Please try again.", "OK");
    }
  }
}
