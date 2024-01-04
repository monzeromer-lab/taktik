import { Component, HostListener, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatchMediaQueries } from 'src/app/shared/MatchMediaQueries';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    MatDividerModule,
    LayoutModule,
    FormsModule,
    MatCheckboxModule,
    MatSidenavModule,
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
})
export class AppBarComponent {
  public getScreenWidth: any;
  public getScreenHeight: any;

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  navState: 'open' | 'closed' = 'closed';
  navSubsState: 'open' | 'closed' = 'closed';

  toggleNav() {
    this.navState = this.navState === 'open' ? 'closed' : 'open';
  }
  toggleNavSubs() {
    this.navSubsState = this.navState === 'open' ? 'closed' : 'open';
  }

  opened: boolean = false;
  sub_opened: boolean = false;

  matchMediaQueries: typeof MatchMediaQueries = MatchMediaQueries;
}
