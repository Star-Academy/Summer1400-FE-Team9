import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  public async loginTapped() {
    const email = this.emailInput.nativeElement.value;
    const password = this.passwordInput.nativeElement.value;
    try {
      await this.authService.login(email, password);
      await this.router.navigateByUrl("home");
    } catch {
      alert("An error has occurred. Please try again."); // TODO: Better alert
    }
  }
}
