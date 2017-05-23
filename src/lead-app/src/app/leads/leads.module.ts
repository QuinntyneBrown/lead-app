import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { LeadComponent } from './lead.component';

const declarables:any[] = [LeadComponent];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables]
})
export class LeadsModule { }
