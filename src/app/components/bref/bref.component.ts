import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-bref',
  templateUrl: './bref.component.html',
  standalone: true,
  styleUrls: ['./bref.component.css'],
  imports: [
    LayoutModule,
    CommonModule,
    MatGridListModule,
    MatIconModule,
  ],
})
export class BrefComponent {

}
