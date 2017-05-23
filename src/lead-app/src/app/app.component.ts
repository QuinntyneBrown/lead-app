import { Component, ChangeDetectionStrategy, Input, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    selector: "app",
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public prepareRoute(outlet:any) { }
}
