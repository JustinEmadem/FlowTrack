import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Role } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getRoles(): Observable<Role[]> {
    return this.http.get<any[]>(`${this.apiUrl}/roles`).pipe(
      map(roles => roles.map(role => ({
        id: role.id,         
        name: role.name,      
        role_id: role.id,      
        role_name: role.name   
      })))
    );
  }
}