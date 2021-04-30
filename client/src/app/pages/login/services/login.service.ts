import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sessions, User } from '../models/session.model';

interface Session {
  username: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = environment.apiUrl

  constructor(private http: HttpClient) { }

  public createSession(form: Session): Observable<Sessions> {
    return this.http.post<Sessions>(`${this.URL}/session`, form)
  }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public setUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  get token(): string | null {
    return localStorage.getItem('token');
  }

  get user(): string | null {
    return localStorage.getItem('user');
  }
}
