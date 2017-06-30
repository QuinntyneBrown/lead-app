import {Component, ViewEncapsulation, Input, EventEmitter, Output} from "@angular/core";
import {FormGroup,FormControl,Validators} from "@angular/forms";

interface Contact {
    email: string;
    firstname: string;
    lastname: string;
    phoneNumber: string;
    streetAddress: string;
    city: string;
}

@Component({
    template: require("./add-contact-form.component.html"),
    styles: [require("./add-contact-form.component.css")],
    selector: "ce-add-contact-form",
    encapsulation: ViewEncapsulation.Native
})
export class AddContactFormComponent {    
    constructor() {
        this.submitEvent = new EventEmitter();
    }

    @Output()
    public submitEvent: EventEmitter<Contact>;

    @Input()
    public buttonCaption: string = "Submit";

    public form = new FormGroup({
        email: new FormControl("", Validators.required),
        firstname: new FormControl("", Validators.required),
        lastname: new FormControl("", Validators.required),
        phoneNumber: new FormControl("", Validators.required),
        streetAddress: new FormControl("", Validators.required),
        city: new FormControl("", Validators.required)
    });    
}