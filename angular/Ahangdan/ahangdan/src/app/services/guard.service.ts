import {Injectable} from '@angular/core';
import {CanActivate} from "@angular/router";

@Injectable()
export class GuardService implements CanActivate {
  public canActivate(): boolean {
    return localStorage.getItem("is-logged-in") === "true";
  }
}
