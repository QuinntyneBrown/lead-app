import {Component, ViewEncapsulation, Input} from "@angular/core";

@Component({
    template: require("./content-block.component.html"),
    styles: [require("./content-block.component.scss")],
    selector: "ce-content-block",
    encapsulation: ViewEncapsulation.Native
})
export class ContentBlockComponent {

    @Input()
    public imageUrl: string;

    @Input()
    public headline1: string;

    @Input()
    public body: string;
}
