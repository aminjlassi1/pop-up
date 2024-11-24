import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isModalOpen = false; // To toggle modal visibility
  client = { username: '', email: '', password: '' }; // For form data
  inscriptions: any[] = []; // List of registered clients

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.resetForm();
  }

  submitForm(form: any) {
    if (form.valid) {
      this.inscriptions.push({ ...this.client });
      this.resetForm();
      this.closeModal();
    }
  }

  resetForm() {
    this.client = { username: '', email: '', password: '' };
  }
}
