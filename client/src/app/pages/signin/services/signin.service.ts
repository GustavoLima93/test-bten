import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private URL = environment.apiUrl

  constructor(private http: HttpClient) { }

  createUser(user: any): Observable<void> {
    return this.http.post<void>(`${this.URL}/user`, user) 
  }
}
