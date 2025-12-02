import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User, UserData } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  // Get all users - returns UserData with IDs
  getUsers(): Observable<{ success: boolean; data: UserData[] }> {
    return this.http.get<{ success: boolean; data: UserData[] }>(this.apiUrl);
  }

  // Get single user - returns UserData with ID
  getUser(id: number): Observable<{ success: boolean; data: UserData }> {
    return this.http.get<{ success: boolean; data: UserData }>(`${this.apiUrl}/${id}`);
  }

  // Update user - accepts partial UserData
  updateUser(id: number, user: Partial<UserData>): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, user);
  }

  // Delete user
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}