import {Injectable} from "@angular/core";
import {Headers as AngualrHeaders} from "@angular/http";

@Injectable()
export class HeadersHelper {
    public getAngularHeaders() {
        let headers = new AngualrHeaders();
        headers.append("Tenant", "489902a0-a39d-4556-94b4-544d33d5ff5b");
        return headers;
    }

    public getHeaders() {
        let headers = new Headers();
        headers.append("Tenant", "489902a0-a39d-4556-94b4-544d33d5ff5b");
        return headers;
    }
}