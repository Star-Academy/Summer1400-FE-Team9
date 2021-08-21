import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormComponent } from './register-form.component';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  let navigatedString = "";
  let emailString = "";
  let passwordString = "";

  let router = {
    navigateByUrl: (url: string) => {
      navigatedString = url;
      Promise.resolve(true);
    }
  };

  let authService = {
    register: (email: string, password: string) => {
      emailString = email;
      passwordString = password;
      Promise.resolve("");
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFormComponent ],
      providers: [
        { provide: Router, useValue: router },
        { provide: AuthService, useValue: authService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register', async () => {
    let emailInput = document.createElement("input");
    emailInput.setAttribute("value", "sss@sss.ss");
    component.emailInput.nativeElement = emailInput;
    let passwordInput = document.createElement("input");
    passwordInput.setAttribute("value", "s");
    component.passwordInput.nativeElement = passwordInput;
    let repeatedPasswordInput = document.createElement("input");
    repeatedPasswordInput.setAttribute("value", "s");
    component.repeatedPasswordInput.nativeElement = repeatedPasswordInput;

    await component.registerTapped();

    expect(emailString).toEqual("sss@sss.ss");
    expect(passwordString).toEqual("s");
    expect(navigatedString).toEqual("login-page");
  });
});
