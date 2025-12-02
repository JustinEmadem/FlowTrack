import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../ui/button/button.component';
import { BadgeComponent } from '../../../ui/badge/badge.component';
import { UserService } from '../../../../../../app/services/user.service';
import { UserData } from '../../../../../../../src/app/models/user.model'; // Import UserData instead

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
  userData: UserData[] = []; // Change to UserData[]
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
    next: (response) => {

      // If your API returns the expected format
      if (response?.success && Array.isArray(response.data)) {
        this.userData = response.data;
      } 
      // Use dummy data if API returns nothing or undefined
      else {
        this.userData = this.getDummyUsers();
      }

      this.isLoading = false;
    },
    error: (error) => {
      console.error('Error loading users:', error);

      // Load dummy users when API fails
      this.userData = this.getDummyUsers();
      
      this.errorMessage = 'Using dummy data due to API error.';
      this.isLoading = false;
    }
  });
}
getDummyUsers(): UserData[] {
  return [
    {
      id: 1,
      firstname: 'Justin',
      middlename: 'A',
      lastname: 'Emadem',
      email: 'justin@example.com',
      phone: '09123456789',
      address: 'Quezon City',
      bio: 'Administrator account',
      role: { id: 1, name: 'administrator' },
      is_active: true
    },
    {
      id: 2,
      firstname: 'Carol',
      middlename: '',
      lastname: 'Dela Cruz',
      email: 'carol@example.com',
      phone: '09987654321',
      address: 'Manila',
      bio: 'Project manager',
      role: { id: 2, name: 'project_manager' },
      is_active: true
    },
    {
      id: 3,
      firstname: 'Michael',
      middlename: '',
      lastname: 'Santos',
      email: 'michael@example.com',
      phone: '09111111111',
      address: 'Cebu City',
      bio: 'Regular member',
      role: { id: 3, name: 'member' },
      is_active: false
    },
    {
      id: 4,
      firstname: 'Angela',
      middlename: '',
      lastname: 'Lopez',
      email: 'angela@example.com',
      phone: '09222222222',
      address: 'Davao City',
      bio: 'Client user',
      role: { id: 4, name: 'client' },
      is_active: true
    }
  ];
}


  get filteredUsers(): UserData[] { // Change to UserData[]
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

  get currentItems(): UserData[] { // Change to UserData[]
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

  handleView(user: UserData): void { // Change to UserData
    console.log('View user:', user);
    // Implement view logic or navigation
  }

  handleEdit(user: UserData): void { // Change to UserData
    console.log('Edit user:', user);
    // Implement edit logic or navigation
  }

  handleDelete(user: UserData): void { // Change to UserData
    if (!user.id) {
      alert('Cannot delete user: Invalid user ID');
      return;
    }

    if (confirm(`Are you sure you want to delete ${user.firstname} ${user.lastname}?`)) {
      this.userService.deleteUser(user.id).subscribe({
        next: (response) => {
          if (response.success) {
            this.loadUsers(); // Reload the list
            alert('User deleted successfully');
          }
        },
        error: (error) => {
          console.error('Error deleting user:', error);
          alert('Failed to delete user. Please try again.');
        }
      });
    }
  }

  getFullName(user: UserData): string { // Change to UserData
    return `${user.firstname} ${user.lastname}`;
  }

  getRoleBadgeColor(roleName: string): 'success' | 'warning' | 'error' | 'info' {
    const roleColors: { [key: string]: 'success' | 'warning' | 'error' | 'info' } = {
      'administrator': 'error',
      'project_manager': 'warning',
      'member': 'info',
      'client': 'success'
    };
    return roleColors[roleName.toLowerCase()] || 'info';
  }

  formatRoleName(roleName: string): string {
    return roleName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  getStatusBadgeColor(isActive: boolean): 'success' | 'error' {
    return isActive ? 'success' : 'error';
  }
}