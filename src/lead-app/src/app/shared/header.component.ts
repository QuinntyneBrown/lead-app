import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
    selector: "ce-header",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit { 
    ngOnInit() {

    }
}
