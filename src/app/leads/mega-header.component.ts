import {Component, ViewEncapsulation} from "@angular/core";

@Component({
    template: require("./mega-header.component.html"),
    styles: [require("./mega-header.component.scss")],
    selector: "ce-mega-header",
    encapsulation: ViewEncapsulation.Native
})
export class MegaHeaderComponent { }
