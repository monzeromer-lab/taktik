import { Component } from '@angular/core';
import { ServiceCard } from './service-card.model';
@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent {
  currentStep: number = 1;
  customerTypes: string[] = ['New Customer', 'Returning Customer'];
  formData: any = {};
  selectedServiceCard: ServiceCard | null = null;

  serviceCards: ServiceCard[] = [
    new ServiceCard("تكنولوجيا المعلومات", 'تعرف معنا على العالم', '.\src\assets\images\laptop.jpg'),
    new ServiceCard('Service 2', 'Description for Service 2', 'image2.jpg'),
  ];

  selectServiceCard(serviceCard: ServiceCard) {
    this.selectedServiceCard = serviceCard;
    this.currentStep = 1;
  }

  goToNextStep() {
    this.currentStep++;
  }

  goToPreviousStep() {
    this.currentStep--;
  }

  submitForm() {
    // Add logic to handle form submission
    console.log('Form Submitted:', this.formData);
  }

}
