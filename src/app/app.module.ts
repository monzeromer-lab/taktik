import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AuthService } from './shared/auth.service';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { MediaQueryDirective } from './shared/MatchMediaQueries';
import { MediaQueryPipe } from './shared/MediaQueryPipe'
import { BrefsModule } from './modules/brefs/brefs.module';
import { VideoPresentationComponent } from "./components/video-presentation/video-presentation.component";
import { BrefComponent } from './components/bref/bref.component';
import { ServiceBtnComponent } from './components/service-btn/service-btn.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { ServicesComponent } from './components/services/services.component';
import { ArticalsComponent } from './components/articals/articals.component';
import { CatalogComponent } from './components/catalog/catalog.component';

@NgModule({
    declarations: [
        MediaQueryDirective,
        MediaQueryPipe,
        AppComponent
    ],
    providers: [AuthService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrefsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AppBarComponent,
        // MatSnackBarModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: !isDevMode(),
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        }),
        VideoPresentationComponent,
        BrefComponent,
        ServiceBtnComponent,
        AppFooterComponent,
        ServicesComponent,
        ArticalsComponent,
        CatalogComponent
    ]
})
export class AppModule { }
