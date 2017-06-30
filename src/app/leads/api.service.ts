import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptionsArgs} from "@angular/http";
import {Observable} from "rxjs";
import {ConfigurationManager} from "../configuration";
import {HeadersHelper} from "../shared/headers-helper";

@Injectable()
export class ApiService {
    constructor(
        private _configurationManager: ConfigurationManager,
        private _headersHelper: HeadersHelper,
        private _http: Http) { }

    public getContentBlockBySlug(slug: string) {
        return this._http
            .get(`${this._configurationManager.contentBaseUrl}/api/conentblock/getbyslug?slug=${slug}`, { headers: this._headersHelper.getHeaders() })
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public tryToSaveContact(contact: any) {
        return this._http
            .post(`${this._configurationManager.contactBaseUrl}/api/contact/add`, contact, { headers: this._headersHelper.getHeaders() })
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }    
}