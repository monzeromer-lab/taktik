import { Component, Input } from '@angular/core';
import { Artiacls } from '../articals/articals.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-artical',
  templateUrl: './artical.component.html',
  styleUrls: ['./artical.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ]
})
export class ArticalComponent {
  @Input() index: number = 0;

  @Input() artical: Artiacls = {
    id: '',
    title: '',
    desc: '',
    img: ''
  }

  
}
