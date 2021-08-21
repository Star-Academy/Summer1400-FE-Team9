import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

import 'jasmine-ajax';

describe('AuthService', () => {
  let service: AuthService;
  let originalFetch: any;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [AuthService]});
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);

    //   originalFetch = (window as any).fetch;
    //   (window as any).fetch = fetchPolyfill;
    //   jasmine.Ajax.install();
    //
    //   jasmine.Ajax.stubRequest(/.*\/user\/login/).andError({
    //     status: 200,
    //     statusText: 'testToken'
    //   });
    //
    //   jasmine.Ajax.stubRequest(/.*\/playlist\/create/).andError({
    //     status: 200,
    //     statusText: "{ 'status': 'success' }"
    //   });
    //
    //   jasmine.Ajax.stubRequest(/.*\/user\/register/).andError({
    //     status: 200,
    //     statusText: "{ 'status': 'success' }"
    //   });
    // });
    //
    // afterEach(() => {
    //   jasmine.Ajax.uninstall();
    //   (window as any).fetch = originalFetch;
    // });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should log out", () => {
    localStorage.setItem("is-logged-in", "true");
    service.logout();
    expect(localStorage.getItem("is-logged-in")).toEqual("false");
  })
});
