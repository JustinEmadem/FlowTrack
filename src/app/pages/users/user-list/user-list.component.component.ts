import { Component } from '@angular/core';
import { BasicTableFourComponent } from '../../../shared/components/tables/basic-tables/basic-table-four/basic-table-four.component';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { ModalRegistration } from '../../../shared/components/ui-example/modal-example/modal-registration/modal-registration';

@Component({
  selector: 'user-list',
  imports: [
    BasicTableFourComponent,
    PageBreadcrumbComponent,
    ComponentCardComponent,
    ModalRegistration,
    ButtonComponent,
  ],
  templateUrl: './user-list.component.component.html',
  styleUrl: './user-list.component.component.css'
})
export class UserListComponent {

}
