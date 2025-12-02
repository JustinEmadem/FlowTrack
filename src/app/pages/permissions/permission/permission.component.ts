import { Component } from '@angular/core';
import { BasicTableSixComponent } from '../../../shared/components/tables/basic-tables/basic-table-six/basic-table-six.component';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ModalRoleComponent } from '../../../shared/components/ui-example/modal-example/modal-role/modal-role.component';

@Component({
  selector: 'app-permission',
  imports: [
    BasicTableSixComponent,
    PageBreadcrumbComponent,
    ModalRoleComponent
  ],
  templateUrl: './permission.component.html',
  styleUrl: './permission.component.css'
})
export class PermissionComponent {

}
