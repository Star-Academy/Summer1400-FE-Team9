import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  public async sendRequest(url: string, body?: object): Promise<any> {
    return this.http.post<any>(url, body, {headers: {'Content-Type': 'application/json'}}).toPromise();
  }

  async login(email: string, password: string): Promise<string> {
    const result = await this.sendRequest("https://songs.code-star.ir/user/login",
      {email: email, password: password});
    const token = result.token;
    localStorage.setItem("token", token.toString());
    localStorage.setItem("is-logged-in", "true");
    await this.sendRequest("https://songs.code-star.ir/playlist/create",
      {token: token, name: "favorites"});
    return token.toString();
  }

  logout() {
    localStorage.setItem("is-logged-in", "false");
    localStorage.setItem("token", "");
    localStorage.setItem("favorites-playlist-id", "0");
  }

  async register(email: string, password: string) {
    await this.sendRequest("https://songs.code-star.ir/user/register",
      {email: email, password: password});
  }
}
