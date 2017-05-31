import {Component, ViewEncapsulation} from "@angular/core";
import {ApiService} from "./api.service";

@Component({
    template: require("./lead.component.html"),
    styles: [require("./lead.component.scss")],
    selector: "ce-lead",
    encapsulation: ViewEncapsulation.Native
})
export class LeadComponent {
    constructor(private _apiService: ApiService) { }
}
