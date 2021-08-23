import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';

import 'jasmine-ajax';
import {HttpClient} from "@angular/common/http";

class HTTPAuthPromiseHelper {
  url = "";
  body?: object;

  constructor(url: string, body?: object) {
    this.url = url;
    this.body = body;
  }

  toPromise(): Promise<any> {
    switch (this.url) {
      case "https://songs.code-star.ir/user/login":
        return Promise.resolve({token: "test-token"});
      case "https://songs.code-star.ir/playlist/create":
        return Promise.resolve("success");
      case "https://songs.code-star.ir/user/register":
        return Promise.resolve("success");
      default:
        return Promise.resolve("error");
    }
  }
}

describe('AuthService', () => {
  let service: AuthService;
  let originalFetch: any;

  let http = {
    post: (url: string, body?: object) => {
      return new HTTPAuthPromiseHelper(url);
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [AuthService, {provide: HttpClient, useValue: http},]});
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should log out", () => {
    localStorage.setItem("is-logged-in", "true");
    service.logout();
    expect(localStorage.getItem("is-logged-in")).toEqual("false");
  });

  it("should register and login", async () => {
    await service.register("sss@sss.sss", "s");
    localStorage.setItem("token", "");
    localStorage.setItem("is-logged-in", "");
    await service.login("sss@sss.sss", "s");
    expect(localStorage.getItem("token")).toEqual("test-token");
    expect(localStorage.getItem("is-logged-in")).toEqual("true");
    // expect(token).toEqual("test-token");
  });
});
