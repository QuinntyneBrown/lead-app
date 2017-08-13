import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";
import {ConfigurationModule} from "../configuration";
import {SharedModule} from "../shared";
import {AddContactPageComponent} from "./add-contact-page.component";
import {LandingPageComponent} from "./landing-page.component";
import {ThankYouPageComponent} from "./thank-you-page.component";

import {ApiService} from "./api.service";

const declarables = [
    AddContactPageComponent,
    LandingPageComponent,
    ThankYouPageComponent
];

const providers = [ApiService];

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        ConfigurationModule,
        RouterModule,
        SharedModule
    ],
    exports: [declarables],
    declarations: [declarables],
    providers: providers
})
export class LeadsModule { }
