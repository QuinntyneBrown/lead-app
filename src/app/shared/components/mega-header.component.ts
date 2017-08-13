import {Component, ViewEncapsulation, Input, EventEmitter, Output} from "@angular/core";

@Component({
    templateUrl: "./mega-header.component.html",
    styleUrls: ["./mega-header.component.css"],
    selector: "ce-mega-header",
    encapsulation: ViewEncapsulation.Emulated
})
export class MegaHeaderComponent {  
    constructor() {
        this.callToActionClick = new EventEmitter();
    }
      
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

    @Output()
    public callToActionClick: EventEmitter<any>;
}
