import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AddContactFormComponent} from "./add-contact-form.component";
import {CtaComponent} from "./cta.component";
import {HeaderComponent} from "./header.component";
import {LeadComponent} from './lead.component';
import {MegaHeaderComponent} from "./mega-header.component";

const declarables: Array<any> = [
    AddContactFormComponent,
    CtaComponent,
    HeaderComponent,
    LeadComponent,
    MegaHeaderComponent 
];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables]
})
export class LeadsModule { }
