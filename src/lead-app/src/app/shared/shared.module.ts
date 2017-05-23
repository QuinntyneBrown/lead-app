import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { HeaderComponent } from './header.component';

const declarables = [HeaderComponent];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables]
})
export class SharedModule { }
