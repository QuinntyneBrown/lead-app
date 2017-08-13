import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {SharedModule} from "./shared";
import {AddContactPageComponent} from "./pages";
import {LandingPageComponent} from "./pages";
import {ThankYouPageComponent} from "./pages";

import {AppComponent} from './app.component';
import { ApiService } from "./api.service";

import {routing} from "./app.routing";

const declarables = [
    AppComponent,
    AddContactPageComponent,
    LandingPageComponent,
    ThankYouPageComponent
];

const providers = [
    ApiService
];

@NgModule({
    imports: [
        
        routing,

        BrowserModule,
        HttpModule,
        CommonModule,
        FormsModule,
        RouterModule,
        SharedModule
    ],
    providers:providers,
    declarations: [declarables],
    exports: [declarables],
    bootstrap: [AppComponent]
})
export class AppModule { }

