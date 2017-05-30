import {Component, ViewEncapsulation, Input, EventEmitter, Output} from "@angular/core";
import {FormGroup,FormControl,Validators} from "@angular/forms";

@Component({
    template: require("./add-contact-form.component.html"),
    styles: [require("./add-contact-form.component.scss")],
    selector: "ce-add-contact-form",
    encapsulation: ViewEncapsulation.Native
})
export class AddContactFormComponent {
    
    public form = new FormGroup({
        email: new FormControl("", Validators.required),
        firstname: new FormControl("", Validators.required),
        lastname: new FormControl("", Validators.required),
        phoneNumber: new FormControl("", Validators.required),
        streetAddress: new FormControl("", Validators.required),
        city: new FormControl("", Validators.required)
    });

    @Input()
    public buttonCaption: any = "Submit";

    @Output()
    public onSubmit: EventEmitter<any> = new EventEmitter();
}
