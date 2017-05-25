import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./header-cta.component.html"),
    styles: [require("./header-cta.component.scss")],
    selector: "header-cta",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderCtaComponent implements OnInit { 
    ngOnInit() {

    }
}
