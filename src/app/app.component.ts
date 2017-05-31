import {Component, OnInit} from "@angular/core";
import {ApiService} from "./leads";

@Component({
    template: require("./app.component.html"),
    styles: [require("./app.component.scss")],
    selector: "app"
})
export class AppComponent implements OnInit {
    constructor(private _apiService: ApiService) { }

    public ngOnInit() {

    }

    public headerContentBlock() { }
}
