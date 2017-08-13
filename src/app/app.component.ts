import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ConfigurationManager } from "./configuration/configuration-manager";

@Component({
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    selector: "app"
})
export class AppComponent implements OnInit {
    constructor(
        private _configurationManager: ConfigurationManager,
        private router: Router,
        private _title: Title
    ) { }

    ngOnInit() {
        this._title.setTitle(this._configurationManager.appTitle);

        this.router.events.subscribe((event) => {
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }
}
