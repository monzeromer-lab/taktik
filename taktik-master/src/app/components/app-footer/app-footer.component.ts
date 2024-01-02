import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css'],
  standalone: true,
  imports: [
    LayoutModule,
    CommonModule,
    MatGridListModule,
    MatIconModule,
  ],
})
export class AppFooterComponent {

}
