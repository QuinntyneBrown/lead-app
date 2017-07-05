import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {AddContactFormComponent} from './components/add-contact-form.component';
import {ButtonComponent} from "./components/button.component";
import {CallToActionComponent} from "./components/call-to-action.component";
import {HeaderComponent} from "./components/header.component";
import {MegaHeaderComponent} from "./components/mega-header.component";
import {ContentBlockComponent} from "./components/content-block.component";

const declarables = [
    AddContactFormComponent,
    ButtonComponent,
    CallToActionComponent,
    ContentBlockComponent,
    HeaderComponent,
    MegaHeaderComponent
];

const providers = [];

@NgModule({
    imports: [CommonModule, ReactiveFormsModule,FormsModule],
    exports: [declarables],
    declarations: [declarables],
    providers: providers
})
export class SharedModule { }
