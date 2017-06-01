import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from '@angular/forms';

import {AddContactFormComponent} from "./add-contact-form.component";
import {ButtonComponent} from "./button.component";
import {CallToActionComponent} from "./call-to-action.component";
import {ContentBlockComponent} from "./content-block.component";
import {HeaderComponent} from "./header.component";
import {LeadComponent} from "./lead.component";
import {MegaHeaderComponent} from "./mega-header.component";

import {ApiService} from "./api.service";

const declarables = [
    AddContactFormComponent,
    ButtonComponent,
    CallToActionComponent,
    ContentBlockComponent,
    HeaderComponent,
    LeadComponent,
    MegaHeaderComponent
];

const providers = [ApiService];

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    exports: [declarables],
    declarations: [declarables],
    providers: providers
})
export class LeadsModule { }
