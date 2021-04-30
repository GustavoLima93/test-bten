import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from '../../login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private URL = environment.apiUrl

  constructor(private http: HttpClient, private loginService: LoginService) { }

  public getProfile(): Observable<any> {
    const user = this.loginService.user;

    const { id } = user && JSON.parse(user);

   return this.http.get<any>(`${this.URL}/user/${id}`)
  }

  updateProfile(id: string, user: any): Observable<void> {
    return this.http.put<void>(`${this.URL}/user/${id}`, user) 
  }

  deleteProfile(id: string): Observable<void> {
    return this.http.delete<void>(`${this.URL}/user/${id}`) 
  }
}
