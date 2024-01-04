import { Component } from '@angular/core';
import { ServiceBtnComponent, Services } from '../service-btn/service-btn.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  standalone: true,
  imports: [
    ServiceBtnComponent,
    CommonModule
  ]
})
export class ServicesComponent {

  sample: Services[] = [
    {
    img: '../../../assets/images/laptop.jpg',
    title: 'هندسة البرمجيات',
    desc: ''
  }, {
    img: '../../../assets/images/skyscrapers-ga13706de2_1920.jpg',
    title: '',
    desc: ''
  }, {
    img: '../../../assets/images/skyscrapers-ga13706de2_1920.jpg',
    title: '',
    desc: ''
  }
]

}
