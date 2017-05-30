import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from '@angular/forms';

import {AddContactFormComponent} from "./add-contact-form.component";
import {ButtonComponent} from "./button.component";
import {CallToActionComponent} from "./call-to-action.component";
import {HeaderComponent} from "./header.component";
import {LeadComponent} from "./lead.component";
import {MegaHeaderComponent} from "./mega-header.component";

const declarables = [
    AddContactFormComponent,
    ButtonComponent,
    CallToActionComponent,
    HeaderComponent,
    LeadComponent,
    MegaHeaderComponent
];

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    exports: [declarables],
    declarations: [declarables]
})
export class LeadsModule { }
