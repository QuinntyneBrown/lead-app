import {Component, ViewEncapsulation, Input} from "@angular/core";

@Component({
    templateUrl: "./call-to-action.component.html",
    styleUrls: ["./call-to-action.component.css"],
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
