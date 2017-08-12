import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http";
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {AddContactFormComponent} from './components/add-contact-form.component';
import {ButtonComponent} from "./components/button.component";
import {CallToActionComponent} from "./components/call-to-action.component";
import {HeaderComponent} from "./components/header.component";
import {MegaHeaderComponent} from "./components/mega-header.component";
import {ContentBlockComponent} from "./components/content-block.component";

import {Storage} from "./services/storage.service";
import {TenantInterceptor} from "./interceptors/tenant.interceptor";

const declarables = [
    AddContactFormComponent,
    ButtonComponent,
    CallToActionComponent,
    ContentBlockComponent,
    HeaderComponent,
    MegaHeaderComponent
];

const providers = [
    Storage,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TenantInterceptor,
        multi: true
    }
];

@NgModule({
    imports: [CommonModule, HttpClientModule, ReactiveFormsModule,FormsModule],
    exports: [declarables],
    declarations: [declarables],
    providers: providers
})
export class SharedModule { }
