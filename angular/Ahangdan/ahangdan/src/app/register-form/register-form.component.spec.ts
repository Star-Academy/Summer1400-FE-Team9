import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RegisterFormComponent} from './register-form.component';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

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
      if (password == "s") throw "Error";
      emailString = email;
      passwordString = password;
      Promise.resolve("");
    },
    isLoggedIn: () => false
  };

  let matSnackBar = {
    open: (message: string, action: string) => {}
  };

  let http = {
    post: (url: string, body?: object) => {
      switch (url) {
        case "https://songs.code-star.ir/user/login":
          return Promise.resolve("test-token");
        case "https://songs.code-star.ir/playlist/create":
          return Promise.resolve("success");
        case "https://songs.code-star.ir/user/register":
          return Promise.resolve("success");
        default:
          return Promise.resolve("error");
      }
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterFormComponent],
      providers: [
        {provide: Router, useValue: router},
        {provide: AuthService, useValue: authService},
        {provide: HttpClient, useValue: http},
        {provide: MatSnackBar, useValue: matSnackBar},
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
    component.email = "sss@sss.ss";
    component.password = "ss";
    component.repeatedPassword = "s";
    await component.registerTapped();

    component.repeatedPassword = "ss";
    await component.registerTapped();

    expect(emailString).toEqual("sss@sss.ss");
    expect(passwordString).toEqual("ss");
    expect(navigatedString).toEqual("login-page");

    component.password = "s";
    component.repeatedPassword = "s";
    await component.registerTapped();
  });
});
