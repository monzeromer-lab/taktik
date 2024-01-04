import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Taktik';
  showServiceFields: boolean = false;

  onToggleServiceFields(show: boolean) {
    this.showServiceFields = show;
  }
}
