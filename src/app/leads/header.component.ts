import {Component, ViewEncapsulation, Input} from "@angular/core";

@Component({
    template: require("./header.component.html"),
    styles: [require("./header.component.scss")],
    selector: "ce-header",
    encapsulation: ViewEncapsulation.Native
})
export class HeaderComponent {
    @Input()
    public headline1: string;

    @Input()
    public headline2: string;
}
