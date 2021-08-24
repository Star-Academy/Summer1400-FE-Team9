import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginFormComponent} from './login-form.component';
import {AuthService} from "../auth.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MusicLoaderService} from "../music-loader.service";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

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
      if (password == "ss") throw "Error";
      emailString = email;
      passwordString = password;
      Promise.resolve("");
    }
  };

  let http = {
    post: (url: string, body?: object) => {
      switch (url) {
        case "https://songs.code-star.ir/user/login": return Promise.resolve("test-token");
        case "https://songs.code-star.ir/playlist/create": return Promise.resolve("success");
        case "https://songs.code-star.ir/user/register": return Promise.resolve("success");
        default: return Promise.resolve("error");
      }
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      providers: [
        {provide: Router, useValue: router},
        {provide: AuthService, useValue: authService},
        {provide: HttpClient, useValue: http},
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
    component.email = "sss@sss.ss";
    component.password = "s";
    await component.loginTapped();

    expect(emailString).toEqual("sss@sss.ss");
    expect(passwordString).toEqual("s");
    expect(navigatedString).toEqual("home");

    component.password = "ss";
    await component.loginTapped();
  });
});
