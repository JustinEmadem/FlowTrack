import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalComponent } from '../../../ui/modal/modal.component';
import { ButtonComponent } from '../../../ui/button/button.component';
import { LabelComponent } from '../../../form/label/label.component';
import { InputFieldComponent } from '../../../form/input/input-field.component';
import { AuthService } from '../../../../../services/auth.service';
import { User } from '../../../../../models/user.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'modal-registration',
  imports: [
    CommonModule,
    ModalComponent,
    FormsModule,
    ButtonComponent,
    LabelComponent,
    InputFieldComponent,
  ],
  templateUrl: './modal-registration.html',
  styles: ``
})

export class ModalRegistration {

  firstname = '';
  middlename: string | null = null;
  lastname = '';
  email = '';
  address: string | null = null;
  bio: string | null = null;
  role: string | null = null; 
  permissions: string | null = null; 
  password = '';
  password_confirmation = ''; 

  constructor(private authService: AuthService) {

  }

  isOpen = false;

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }

  handleSave() {
    const payload: User = {
      firstname: this.firstname,
      middlename: this.middlename,
      lastname: this.lastname,
      email: this.email,
      address: this.address,
      bio: this.bio,
      is_active: true,
      password: this.password,
      password_confirmation: this.password_confirmation 
    };

    console.log('Payload being sent:', payload);

    this.authService.register(payload).subscribe({
      next: (response) => {
        console.log('User registered successfully', response);
        this.closeModal();
        this.resetForm();
      },
      error: (error) => {
        console.error('Registration failed', error);
        alert('Registration failed: ' + (error.error.message || 'Unknown error'));
      }
    });
  }

  resetForm() {
    this.firstname = '';
    this.middlename = null;
    this.lastname = '';
    this.email = '';
    this.address = null;
    this.bio = null;
    // this.role = null;
    this.permissions = null;
    this.password = '';
    this.password_confirmation = '';
  }
}
