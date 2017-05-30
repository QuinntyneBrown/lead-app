import {Component, ViewEncapsulation} from "@angular/core";

@Component({
    template: require("./lead.component.html"),
    styles: [require("./lead.component.scss")],
    selector: "ce-lead",
    encapsulation: ViewEncapsulation.Native
})
export class LeadComponent { }
