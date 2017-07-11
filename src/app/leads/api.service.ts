import {Injectable} from "@angular/core";
import {Http,Headers,RequestOptionsArgs} from "@angular/http";
import {Observable} from "rxjs";
import {ConfigurationManager} from "../configuration";

@Injectable()
export class ApiService {
    constructor(
        private _configurationManager: ConfigurationManager,
        private _http: Http) { }

    public async getViewModel(): Promise<{
        callToAction: any,
        header: any,
        contentBlock:any
    }> {
        const responses = await Promise.all([
            this.get(`${this._configurationManager.contentBaseUrl}/api/calltoactioncontentblock/getbyslug?slug=call-to-action`),
            this.get(`${this._configurationManager.contentBaseUrl}/api/contentblock/getbyslug?slug=header`),
            this.get(`${this._configurationManager.contentBaseUrl}/api/contentblock/getbyslug?slug=content-block`)
        ]);
        
        return {
            callToAction: responses[0].callToActionContentBlock,
            header: responses[1].contentBlock,
            contentBlock: responses[2].contentBlock
        };
    }

    public get(url: string): Promise<any> {
        return this._http.get(url, { headers: this.getHeaders() }).map(data => data.json()).toPromise();
    }

    public tryToSaveContact(contactRequest: any) {
        return this._http
            //.post(`${this._configurationManager.contactBaseUrl}/api/contact/add`, contact, { headers: this.getHeaders() })
            .post(`http://localhost:64411/api/contactrequest/add`, { contactRequest }, { headers: this.getHeaders() })
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }    

    public getHeaders() {
        let headers = new Headers();
        headers.append("Tenant", "489902a0-a39d-4556-94b4-544d33d5ff5b");
        return headers;
    }
}