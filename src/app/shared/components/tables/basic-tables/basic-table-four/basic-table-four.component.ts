import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../ui/button/button.component';
import { BadgeComponent } from '../../../ui/badge/badge.component';
import { UserService } from '../../../../../../app/services/user.service';
import { UserData } from '../../../../../../../src/app/models/user.model';

@Component({
  selector: 'app-basic-table-four',
  imports: [
    CommonModule,
    ButtonComponent,
    BadgeComponent,
  ],
  templateUrl: './basic-table-four.component.html',
  styles: ``
})

export class BasicTableFourComponent implements OnInit {
  userData: UserData[] = [];
  isLoading = false;
  errorMessage = '';
  
  currentPage = 1;
  itemsPerPage = 5;
  searchTerm = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.userData = data;
        this.isLoading = false;
      },
    });
  }

  get filteredUsers(): UserData[] {
    if (!this.searchTerm) {
      return this.userData;
    }
    
    const term = this.searchTerm.toLowerCase();
    return this.userData.filter(user => 
      user.firstname.toLowerCase().includes(term) ||
      user.lastname.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term) ||
      (user.role?.name && user.role.name.toLowerCase().includes(term))
    );
  }

  get totalPages(): number {
    return Math.ceil(this.filteredUsers.length / this.itemsPerPage);
  }

  get currentItems(): UserData[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredUsers.slice(start, start + this.itemsPerPage);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
    this.currentPage = 1;
  }

  handleView(user: UserData): void {
    console.log('View user:', user);
    // Implement view logic or navigation
  }

  handleEdit(user: UserData): void {
    console.log('Edit user:', user);
    // Implement edit logic or navigation
  }

  handleDelete(user: UserData): void {
    if (confirm(`Are you sure you want to delete ${user.firstname} ${user.lastname}?`)) {
      this.userService.deleteUser(user.id).subscribe({
        next: (response) => {
          this.loadUsers();
          alert(response.message);
        },
        error: (error) => {
          const errorMsg = error.error?.message || 'Failed to delete user. Please try again.';
          alert(errorMsg);
        }
      });
    }
  }

  getFullName(user: UserData): string {
    return `${user.firstname} ${user.lastname}`;
  }

  getRoleBadgeColor(roleName: string | undefined): 'success' | 'warning' | 'error' | 'info' {
    if (!roleName) return 'info';
    
    const roleColors: { [key: string]: 'success' | 'warning' | 'error' | 'info' } = {
      'administrator': 'error',
      'project_manager': 'warning',
      'member': 'info',
      'client': 'success'
    };
    return roleColors[roleName.toLowerCase()] || 'info';
  }

  formatRoleName(roleName: string | undefined): string {
    if (!roleName) return 'No Role';
    return roleName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  getStatusBadgeColor(isActive: boolean): 'success' | 'error' {
    return isActive ? 'success' : 'error';
  }
}