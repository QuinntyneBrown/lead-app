import {Component, ViewEncapsulation, Input, Output,EventEmitter} from "@angular/core";

@Component({
    templateUrl: "./call-to-action.component.html",
    styleUrls: ["./call-to-action.component.css"],
    selector: "ce-call-to-action",
    encapsulation: ViewEncapsulation.Emulated
})
export class CallToActionComponent {
    constructor() {
        this.callToActionClick = new EventEmitter();
    }

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

    @Output()
    public callToActionClick: EventEmitter<any>;
}
