import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SwitchComponent } from './components/switch/switch.component';
import { NewsContainerComponent } from './components/news-container/news-container.component';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import { NewsModalComponent } from './components/news-modal/news-modal.component';
import { ShareComponent } from './components/share/share.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SwitchComponent,
        NewsContainerComponent,
        ContentWrapperComponent,
        NewsModalComponent,
        ShareComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule,
        InfiniteScrollModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})

export class AppModule {
    constructor(library: FaIconLibrary) {
        library.addIconPacks(fas, fab);
    }
}
