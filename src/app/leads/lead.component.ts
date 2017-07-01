import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {ApiService} from "./api.service";

@Component({
    templateUrl: "./lead.component.html",
    styleUrls: ["./lead.component.css"],
    selector: "ce-lead",
    encapsulation: ViewEncapsulation.Native
})
export class LeadComponent implements OnInit {
    constructor(private _apiService: ApiService) { }

    public async ngOnInit() {
        const viewModel = await this._apiService.getContentBlocksBySlug();

        //this._apiService.getContentBlockBySlug("call-to-action")
        //    .subscribe(callToAction => this.callToAction = callToAction);
        //this._apiService.getContentBlockBySlug("header")
        //    .subscribe(header => this.header = header);
        //this._apiService.getContentBlockBySlug("content-block")
        //    .subscribe(contentBlock => this.contentBlock = contentBlock);        
    }

    public callToAction: any = {};

    public header: any = {
        headline1: "Headline"
    };

    public contentBlock: any = {
        body:""
    };
    
    public tryToSaveContact(event:any) {
        this._apiService.tryToSaveContact(event.detail.contact)
            .subscribe(x => {

            });
    }
}
