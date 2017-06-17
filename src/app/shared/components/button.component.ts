import {Component, ViewEncapsulation, Output, EventEmitter} from "@angular/core";

@Component({
    template: require("./button.component.html"),
    styles: [require("./button.component.scss")],
    selector: "ce-button",
    encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent {
    @Output()
    public click: EventEmitter<any> = new EventEmitter();
}
