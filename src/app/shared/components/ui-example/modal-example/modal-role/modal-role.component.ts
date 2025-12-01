import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalComponent } from '../../../ui/modal/modal.component';
import { ButtonComponent } from '../../../ui/button/button.component';
import { LabelComponent } from '../../../form/label/label.component';
import { InputFieldComponent } from '../../../form/input/input-field.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-role',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    FormsModule,
    ButtonComponent,
    LabelComponent,
    InputFieldComponent,
  ],
  templateUrl: './modal-role.component.html',
  styleUrls: ['./modal-role.component.css'],
})
export class ModalRoleComponent {

  role: string = '';
  description: string | null = null;

  isOpen = false;

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }

  handleSave() {
    const payload = {
      role: this.role,
      description: this.description
    };

    console.log('Saving role:', payload);

    // TODO: HTTP or emit event to parent
    this.closeModal();
  }
}
