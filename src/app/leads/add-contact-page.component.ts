import { Component, OnInit } from "@angular/core";
import { ApiService } from "./api.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: "./add-contact-page.component.html",
    styleUrls: ["./add-contact-page.component.css"],
    selector: "ce-add-contact-page"
})
export class AddContactPageComponent implements OnInit {
    constructor(
        private _apiService: ApiService,
        private _router: Router
    ) { }

    public ngOnInit() {
        this._apiService.getViewModel().subscribe(x => this.vm = x);        
    }

    public vm: { callToAction: any, header: any, contentBlock: any } = {
        header: {
            headline1: "",
            headline2: ""
        },
        callToAction: {},
        contentBlock: {}
    };

    public tryToSaveContact(event$: any) {
        this._apiService.tryToSaveContact(event$.detail.contact).subscribe();
        this._router.navigateByUrl("/thank-you");
    }

    public contact: any = {};
}
