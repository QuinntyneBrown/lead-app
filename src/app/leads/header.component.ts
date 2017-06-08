import {Component, ViewEncapsulation, Input, ElementRef} from "@angular/core";

@Component({
    template: require("./header.component.html"),
    styles: [require("./header.component.scss")],
    selector: "ce-header",
    encapsulation: ViewEncapsulation.Native
})
export class HeaderComponent {
    constructor(private _elementRef: ElementRef) { }

    @Input()
    public headline1: string;

    @Input()
    public headline2: string;
}