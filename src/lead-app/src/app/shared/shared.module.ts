import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { HeaderComponent } from './header.component';
import { ApiService } from "./api.service";

const declarables = [HeaderComponent];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables],
    providers: [ApiService]
})
export class SharedModule { }
