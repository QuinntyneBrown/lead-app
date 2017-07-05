import {Component, ViewEncapsulation, Input} from "@angular/core";

@Component({
    templateUrl: "./content-block.component.html",
    styleUrls: ["./content-block.component.css"],
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
