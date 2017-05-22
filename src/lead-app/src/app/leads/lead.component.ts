import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./lead.component.html"),
    styles: [require("./lead.component.scss")],
    selector: "lead",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeadComponent implements OnInit { 
    ngOnInit() {

    }
}
