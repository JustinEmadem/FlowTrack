import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { authInterceptor } from './auth.interceptors';
import { UserData, UserCount } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserData[]> {
    return this.http.get<{ data: UserData[] }>(this.apiUrl)
      .pipe(map(response => response.data));
  }

  getUser(id: number): Observable<UserData> {
    return this.http.get<{ data: UserData }>(`${this.apiUrl}/${id}`)
      .pipe(map(response => response.data));
  }

  updateUser(id: number, user: Partial<UserData>): Observable<UserData> {
    return this.http.put<{ data: UserData }>(`${this.apiUrl}/${id}`, user)
      .pipe(map(response => response.data));
  }

  deleteUser(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }

  getUserCount(): Observable<UserCount> {
    return this.http.get<UserCount>(`${this.apiUrl}/count/total`);
  }
}