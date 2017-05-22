import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { LeadComponent } from './lead.component';

const declarables = [LeadComponent];
const providers = [];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables],
    providers: providers
})
export class LeadsModule { }
