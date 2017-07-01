import {Component,ViewEncapsulation,Input} from "@angular/core";

@Component({
    templateUrl: "./button.component.html",
    styleUrls: ["./button.component.css"],
    selector: "ce-button",
    encapsulation: ViewEncapsulation.Emulated
})
export class ButtonComponent {
    @Input()
    public disabled: boolean = false;
}
