import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ConfigurationManager } from './configuration-manager';

const declarables = [];
const providers = [ConfigurationManager];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables],
    providers: providers
})
export class ConfigurationModule { }
