import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  register(user: User) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(data: any) {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  getUser(token: string) {
    return this.http.get(`${this.apiUrl}/user`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
