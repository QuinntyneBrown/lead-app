import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./mega-header.component.html"),
    styles: [require("./mega-header.component.scss")],
    selector: "mega-header",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MegaHeaderComponent implements OnInit { 
    ngOnInit() {

    }
}
