import { Component, ChangeDetectionStrategy, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { ApiService } from "./api.service";

@Component({
    template: require("./app.component.html"),
    styles: [require("./app.component.scss")],
    selector: "app"
})
export class AppComponent implements OnInit {
    constructor(private _apiService: ApiService) { }

    public ngOnInit() {
        this._apiService
            .getContentBlockBySlug("header")
            .subscribe(results => this.headerContentBlock = results.contentBlock);
    }

    public prepareRoute(outlet: any) { }

    public headerContentBlock: any;
    
}
