import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NavbarComponent} from './navbar.component';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  let hasLoggedOut = false;
  let navigatedString = "";

  let router = {
    navigateByUrl: (url: string) => {
      navigatedString = url;
      Promise.resolve(true)
    }
  };

  let authService = {
    logout: () => {
      hasLoggedOut = true;
    },
    isLoggedIn: () => localStorage.getItem("is-logged-in") == "true"
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [
        {provide: Router, useValue: router},
        {provide: AuthService, useValue: authService}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register button callback work', async () => {
    localStorage.setItem("is-logged-in", "true");
    await component.registerButtonTapped();
    expect(hasLoggedOut).toBeTruthy();
    expect(navigatedString).toEqual("home");
    hasLoggedOut = false;
    navigatedString = "";

    localStorage.setItem("is-logged-in", "false");
    await component.registerButtonTapped();
    expect(hasLoggedOut).toBeFalsy();
    expect(navigatedString).toEqual("register-form");
    hasLoggedOut = false;
    navigatedString = "";
  });
});
