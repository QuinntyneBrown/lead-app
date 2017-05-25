import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";

@Component({
    template: require("./cta.component.html"),
    styles: [require("./cta.component.scss")],
    selector: "ce-cta"
})
export class CtaComponent {     
    @Input()
    public headline: string;

    @Input()
    public body: string;

    @Input()
    public callToAction: string;

    @Input()
    public finalNote: string;
    
    @Output()
    public onSubmit: EventEmitter<any> = new EventEmitter();
}
