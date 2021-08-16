import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss', '../login-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;
  @ViewChild('repeatedPasswordInput') repeatedPasswordInput!: ElementRef;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  async registerTapped() {
    const email = this.emailInput.nativeElement.value;
    const password = this.passwordInput.nativeElement.value;
    const repeatedPassword = this.repeatedPasswordInput.nativeElement.value;
    if (password !== repeatedPassword) {
      alert("Passwords don't match"); // TODO: Better alert
      return;
    }
    try {
      await this.authService.register(email, password);
      await this.router.navigateByUrl("login-page");
    } catch {
      alert("An error has occurred. Please try again."); // TODO: Better alert
    }
  }
}
