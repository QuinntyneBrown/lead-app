import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    template: require("./add-contact-form.component.html"),
    styles: [require("./add-contact-form.component.scss")],
    selector: "ce-add-contact-form"
})
export class AddContactFormComponent { 
    @Output()
    public submitted: EventEmitter<any> = new EventEmitter();
}
