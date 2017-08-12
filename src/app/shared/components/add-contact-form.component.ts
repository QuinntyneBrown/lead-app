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
    templateUrl: "./add-contact-form.component.html",
    styleUrls: [
        "../../../styles/forms.css",
        "./add-contact-form.component.css"
    ],
    selector: "ce-add-contact-form"    
})
export class AddContactFormComponent {    
    constructor() {
        this.submitEvent = new EventEmitter();
    }

    @Input("contact")
    public set contact(value) {
        this.form.reset();
    }

    @Output()
    public submitEvent: EventEmitter<any>;

    @Input()
    public buttonCaption: string = "Submit";

    public form = new FormGroup({
        email: new FormControl(""),
        firstname: new FormControl(""),
        lastname: new FormControl(""),
        phoneNumber: new FormControl(""),
        streetAddress: new FormControl(""),
        city: new FormControl("")
    });        
}
