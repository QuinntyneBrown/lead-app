import { Component, Input, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
    template: require("./lead.component.html"),
    styles: [require("./lead.component.scss")],
    selector: "ce-lead"
})
export class LeadComponent implements OnInit { 
    constructor(private _apiService: ApiService) { }

    public ngOnInit() {
        this._apiService
            .getContentBlockBySlug("cta")
            .subscribe(results => this.ctaContentBlock = results.contentBlock);
    }

    public tryToSaveContact(e) {
        this._apiService
            .tryToSaveContact(e.contact)
            .subscribe(results => { });
    }

    public ctaContentBlock: any;
}