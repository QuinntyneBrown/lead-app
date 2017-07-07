import {Component, ViewEncapsulation, Input, ElementRef} from "@angular/core";

@Component({
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
    selector: "ce-header",
    encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent {
    constructor(private _elementRef: ElementRef) { }

    @Input()
    public headline1: string;

    @Input()
    public headline2: string;
}