import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBarComponent } from 'src/app/components/app-bar/app-bar.component';
import { VideoPresentationComponent } from 'src/app/components/video-presentation/video-presentation.component';
import { BrefComponent } from 'src/app/components/bref/bref.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppBarComponent,
    VideoPresentationComponent,
    BrefComponent
  ],
  exports: [
    
  ]
})
export class BrefsModule { }
