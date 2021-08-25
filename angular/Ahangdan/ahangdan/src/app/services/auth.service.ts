import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

class AuthResult {
  public token = "";
}

class PlaylistCreationResult {
  public id = 0;
  public error = "";
}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  async login(email: string, password: string): Promise<string> {
    const result = await this.http.post<AuthResult>("https://songs.code-star.ir/user/login", {
      email: email,
      password: password
    }, {headers: {'Content-Type': 'application/json'}}).toPromise();
    const token = result.token;
    localStorage.setItem("token", token.toString());
    localStorage.setItem("is-logged-in", "true");
    await this.http.post<PlaylistCreationResult>("https://songs.code-star.ir/playlist/create", {
      token: token,
      name: "favorites"
    }, {headers: {'Content-Type': 'application/json'}}).toPromise();
    return token.toString();
  }

  logout(): void {
    localStorage.setItem("is-logged-in", "false");
    localStorage.setItem("token", "");
    localStorage.setItem("favorites-playlist-id", "0");
  }

  async register(email: string, password: string): Promise<void> {
    await this.http.post<AuthResult>("https://songs.code-star.ir/user/register", {
      email: email,
      password: password
    }, {headers: {'Content-Type': 'application/json'}}).toPromise();
  }
}
