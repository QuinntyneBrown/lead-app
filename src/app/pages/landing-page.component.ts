import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../api.service";

@Component({
    templateUrl: "./landing-page.component.html",
    styleUrls: ["./landing-page.component.css"],
    selector: "ce-landing-page"
})
export class LandingPageComponent implements OnInit {
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

    public callToActionClick($event) {
        this._router.navigateByUrl("/contact/create");
    }
}
