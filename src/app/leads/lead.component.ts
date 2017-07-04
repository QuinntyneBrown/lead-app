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
        this.vm = await this._apiService.getViewModel();       
    }

    public vm: { callToAction: any, header: any, contentBlock: any } = {
        header: {
            headline1: "",
            headline2: ""
        },
        callToAction: {},
        contentBlock: {}
    };
    
    public async tryToSaveContact(event:any) {
        await this._apiService.tryToSaveContact(event.detail.contact).toPromise();
    }
}
