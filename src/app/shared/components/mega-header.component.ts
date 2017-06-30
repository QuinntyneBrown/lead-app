import {Component, ViewEncapsulation, Input} from "@angular/core";

@Component({
    template: require("./mega-header.component.html"),
    styles: [require("./mega-header.component.css")],
    selector: "ce-mega-header",
    encapsulation: ViewEncapsulation.Native
})
export class MegaHeaderComponent {    
    @Input()
    public headline: string;

    @Input()
    public headline1: string;

    @Input()
    public headline2: string;

    @Input()
    public body: string;

    @Input()
    public buttonCaption: string;

    @Input()
    public callToAction: string;

    @Input()
    public finalNote: string;
}
