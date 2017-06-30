import {Component, ViewEncapsulation, Output, EventEmitter} from "@angular/core";

@Component({
    template: require("./button.component.html"),
    styles: [require("./button.component.css")],
    selector: "ce-button",
    encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent {
    @Output()
    public click: EventEmitter<any> = new EventEmitter();
}
