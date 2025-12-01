import { Component } from '@angular/core';
import { BasicTableOneComponent } from '../../shared/components/tables/basic-tables/basic-table-one/basic-table-one.component';
import { PageBreadcrumbComponent } from '../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ModalRoleComponent } from '../../shared/components/ui-example/modal-example/modal-role/modal-role.component';

@Component({
  selector: 'app-roles',
  imports: [
    PageBreadcrumbComponent,
    BasicTableOneComponent,
    ModalRoleComponent
  ],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  
}
