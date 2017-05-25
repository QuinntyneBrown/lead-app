import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { LeadComponent } from './lead.component';
import { CtaComponent } from "./cta.component";

const declarables: any[] = [LeadComponent, CtaComponent];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables]
})
export class LeadsModule { }
