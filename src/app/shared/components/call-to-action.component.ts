import {Component, ViewEncapsulation, Input} from "@angular/core";

@Component({
    template: require("./call-to-action.component.html"),
    styles: [require("./call-to-action.component.scss")],
    selector: "ce-call-to-action",
    encapsulation: ViewEncapsulation.Native
})
export class CallToActionComponent {
    @Input()
    public headline: string;

    @Input()
    public body: string;

    @Input()
    public buttonCaption: string;

    @Input()
    public callToAction: string;

    @Input()
    public finalNote: string;
}
