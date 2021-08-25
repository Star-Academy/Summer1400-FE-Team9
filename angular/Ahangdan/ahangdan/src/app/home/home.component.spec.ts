import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let hasNavigated = false;
  let navigatedString = "";

  let router = {
    navigateByUrl: (destination: string) => {
      hasNavigated = true;
      navigatedString = destination;
    }
  };

  let authService = {
    isLoggedIn: () => localStorage.getItem("is-logged-in") == "true"
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{provide: Router, useValue: router}, {provide: AuthService, useValue: authService}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should primary button callback work', async () => {
    localStorage.setItem("is-logged-in", "true");
    await component.primaryButtonTapped();
    expect(hasNavigated).toBeTruthy();
    expect(navigatedString).toEqual("music-list-page");
    hasNavigated = false;
    navigatedString = "";

    localStorage.setItem("is-logged-in", "false");
    await component.primaryButtonTapped();
    expect(hasNavigated).toBeTruthy();
    expect(navigatedString).toEqual("../register-form");
    hasNavigated = false;
    navigatedString = "";
  });
});
