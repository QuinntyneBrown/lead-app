import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptionsArgs} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class ApiService {
    constructor(private _http: Http) { }

    public getContentBlockBySlug(slug: string) {
        return this._http
            .get(`http://contentblock.quinntynebrown.com/api/conentblock/getbyslug?slug=${slug}`, { headers: this.createTenantHeaders() })
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public tryToSaveContact(contact: any) {
        var headers = this.createTenantHeaders();        
        return this._http
            .post(`http://contact.quinntynebrown.com/api/contact/add`, contact, { headers: this.createTenantHeaders() })
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public createTenantHeaders(): Headers {
        var headers = new Headers();
        headers.append("Tenant", "489902a0-a39d-4556-94b4-544d33d5ff5b");
        return headers;
    }   
}
