import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Services {
  img: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-service-btn',
  templateUrl: './service-btn.component.html',
  standalone: true,
  styleUrls: ['./service-btn.component.css'],
  imports: [FormsModule, CommonModule],
})
export class ServiceBtnComponent {
  constructor() {}

  @Input()
  img!: string;
  @Input()
  title!: string;
  @Input()
  desc!: string;

  isOpened: boolean = false;

  updateImageSource(src: string) {
    return `url(${src})`;
  }

  option: 'personal' | 'company' | 'organization' | undefined;
  tab: 'form' | 'payment' | 'confirm' | undefined;
}
