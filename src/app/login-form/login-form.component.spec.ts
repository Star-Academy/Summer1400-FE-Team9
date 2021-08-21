import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginFormComponent} from './login-form.component';
import {AuthService} from "../auth.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MusicLoaderService} from "../music-loader.service";
import {Subject} from "rxjs";

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

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
    login: (email: string, password: string) => {
      emailString = email;
      passwordString = password;
      Promise.resolve("");
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      providers: [
        {provide: Router, useValue: router},
        {provide: AuthService, useValue: authService}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login', async () => {
    let emailInput = document.createElement("input");
    emailInput.setAttribute("value", "sss@sss.ss");
    component.emailInput.nativeElement = emailInput;
    let passwordInput = document.createElement("input");
    passwordInput.setAttribute("value", "s");
    component.passwordInput.nativeElement = passwordInput;

    await component.loginTapped();

    expect(emailString).toEqual("sss@sss.ss");
    expect(passwordString).toEqual("s");
    expect(navigatedString).toEqual("home");
  });
});
