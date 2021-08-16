import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  public static async sendRequest(url: string, method: string, body?: object): Promise<any> {
    const init: RequestInit = {headers: {'Content-Type': 'application/json'}};
    init.method = method;
    if (body) init.body = JSON.stringify(body);
    return fetch(url, init).then((response) => {
      if (response.ok) return response.json();
      throw response.text();
    })
  }

  async login(email: string, password: string): Promise<string> {
    const result = await AuthService.sendRequest("https://songs.code-star.ir/user/login",
      'POST',
      {email: email, password: password});
    const token = result.token;
    localStorage.setItem("token", token.toString());
    localStorage.setItem("is-logged-in", "true");
    return token.toString();
  }
}
