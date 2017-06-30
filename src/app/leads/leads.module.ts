import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from '@angular/forms';
import {ConfigurationModule} from "../configuration";
import {SharedModule} from "../shared";
import {LeadComponent} from "./lead.component";

import {ApiService} from "./api.service";

const declarables = [LeadComponent];

const providers = [ApiService];

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, ConfigurationModule, SharedModule],
    exports: [declarables],
    declarations: [declarables],
    providers: providers
})
export class LeadsModule { }
