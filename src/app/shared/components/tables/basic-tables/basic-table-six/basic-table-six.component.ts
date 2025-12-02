import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../ui/button/button.component';
import { BadgeComponent } from '../../../ui/badge/badge.component';

export interface PermissionData {
  id: number;
  name: string;
  description: string;
  group: string;
  is_active: boolean;
}

@Component({
  selector: 'app-basic-table-six',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    BadgeComponent,
  ],
  templateUrl: './basic-table-six.component.html',
  styles: ``
})
export class BasicTableSixComponent implements OnInit {

  permissions: PermissionData[] = [];
  isLoading = false;
  errorMessage = '';

  currentPage = 1;
  itemsPerPage = 5;
  searchTerm = '';

  ngOnInit(): void {
    this.loadPermissions();
  }

  loadPermissions(): void {
    this.isLoading = true;

    // Dummy data
    this.permissions = this.getDummyPermissions();
    this.isLoading = false;
  }

  // Dummy permissions
  getDummyPermissions(): PermissionData[] {
    return [
      {
        id: 1,
        name: 'create_user',
        description: 'Allows creating new users',
        group: 'User Management',
        is_active: true
      },
      {
        id: 2,
        name: 'edit_user',
        description: 'Allows editing user information',
        group: 'User Management',
        is_active: true
      },
      {
        id: 3,
        name: 'delete_user',
        description: 'Allows deleting users',
        group: 'User Management',
        is_active: false
      },
      {
        id: 4,
        name: 'manage_roles',
        description: 'Can manage user roles and permissions',
        group: 'Access Control',
        is_active: true
      },
      {
        id: 5,
        name: 'view_reports',
        description: 'Access to system analytics and reports',
        group: 'Reporting',
        is_active: true
      },
      {
        id: 6,
        name: 'edit_settings',
        description: 'Modify system configuration settings',
        group: 'System',
        is_active: false
      }
    ];
  }

  // Search + Pagination
  get filteredPermissions(): PermissionData[] {
    if (!this.searchTerm) return this.permissions;

    const term = this.searchTerm.toLowerCase();
    return this.permissions.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term) ||
      p.group.toLowerCase().includes(term)
    );
  }

  get totalPages(): number {
    return Math.ceil(this.filteredPermissions.length / this.itemsPerPage);
  }

  get currentItems(): PermissionData[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredPermissions.slice(start, start + this.itemsPerPage);
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

  // Actions
  handleView(permission: PermissionData): void {
    console.log('View permission:', permission);
  }

  handleEdit(permission: PermissionData): void {
    console.log('Edit permission:', permission);
  }

  handleDelete(permission: PermissionData): void {
    console.log('Delete permission:', permission);
  }

  // Badge
  getStatusBadgeColor(isActive: boolean): 'success' | 'error' {
    return isActive ? 'success' : 'error';
  }

  formatName(name: string): string {
    return name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }
}
