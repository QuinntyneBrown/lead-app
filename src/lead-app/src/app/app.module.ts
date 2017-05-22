import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from "./app.component";
import { LeadsModule } from "../app/leads";
import { SharedModule } from "../app/shared";
import { routing } from "./app.routing";

@NgModule({
    declarations: [AppComponent],
    imports: [
        SharedModule,
        BrowserAnimationsModule,
        LeadsModule,
        routing,

        BrowserModule,
        HttpModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule { }

export * from "./environment";