import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../ui/button/button.component';
import { TableDropdownComponent } from '../../../common/table-dropdown/table-dropdown.component';
import { BadgeComponent } from '../../../ui/badge/badge.component';

interface Role {
  id: number;
  name: string;
  description: string;
  userCount: number;
  createdDate: string;
  status: "Active" | "Inactive";
}

@Component({
  selector: 'app-basic-table-one',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    TableDropdownComponent,
    BadgeComponent,
  ],
  templateUrl: './basic-table-one.component.html',
})
export class BasicTableOneComponent {

  roleData: Role[] = [
    {
      id: 1,
      name: "Administrator",
      description: "Full system access and control",
      userCount: 5,
      createdDate: "Nov 23, 2024",
      status: "Active",
    },
    {
      id: 2,
      name: "Project Manager",
      description: "Manages projects and team members",
      userCount: 12,
      createdDate: "Nov 23, 2024",
      status: "Active",
    },
    {
      id: 3,
      name: "Member",
      description: "Standard user with basic permissions",
      userCount: 45,
      createdDate: "Nov 23, 2024",
      status: "Active",
    },
    {
      id: 4,
      name: "Client",
      description: "External client with limited access",
      userCount: 23,
      createdDate: "Nov 23, 2024",
      status: "Active",
    },
    {
      id: 5,
      name: "Guest",
      description: "Temporary access for visitors",
      userCount: 8,
      createdDate: "Nov 23, 2024",
      status: "Inactive",
    },
    {
      id: 6,
      name: "Developer",
      description: "Technical team member with code access",
      userCount: 15,
      createdDate: "Nov 23, 2024",
      status: "Active",
    },
    {
      id: 7,
      name: "Designer",
      description: "Creative team member for design tasks",
      userCount: 7,
      createdDate: "Nov 23, 2024",
      status: "Active",
    },
    {
      id: 8,
      name: "Marketing",
      description: "Marketing and promotion team access",
      userCount: 10,
      createdDate: "Nov 23, 2024",
      status: "Active",
    },
    {
      id: 9,
      name: "Support",
      description: "Customer support team member",
      userCount: 20,
      createdDate: "Nov 23, 2024",
      status: "Active",
    },
    {
      id: 10,
      name: "Analyst",
      description: "Data analysis and reporting access",
      userCount: 6,
      createdDate: "Nov 23, 2024",
      status: "Inactive",
    },
  ]

  currentPage = 1;
  itemsPerPage = 5;

  get totalPages(): number {
    return Math.ceil(this.roleData.length / this.itemsPerPage);
  }

  get currentItems(): Role[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.roleData.slice(start, start + this.itemsPerPage);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  handleViewMore(item: Role) {
    console.log('View More:', item);
  }

  handleEdit(item: Role) {
    console.log('Edit:', item);
  }

  handleDelete(item: Role) {
    if (confirm(`Are you sure you want to delete the role "${item.name}"?`)) {
      this.roleData = this.roleData.filter(r => r.id !== item.id);
      console.log('Delete:', item);
    }
  }

  getBadgeColor(status: string): 'success' | 'error' {
    return status === 'Active' ? 'success' : 'error';
  }

  getRoleBadgeColor(roleName: string): 'success' | 'warning' | 'error' | 'info' {
    const roleColors: { [key: string]: 'success' | 'warning' | 'error' | 'info' } = {
      'administrator': 'error',
      'project manager': 'warning',
      'member': 'info',
      'client': 'success',
      'guest': 'info',
      'developer': 'info',
      'designer': 'info',
      'marketing': 'warning',
      'support': 'success',
      'analyst': 'info',
    };
    return roleColors[roleName.toLowerCase()] || 'info';
  }
}