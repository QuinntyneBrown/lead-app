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

    public async getContentBlocksBySlug(): Promise<any> {
        const responses = await Promise.all([
            fetch(`${this._configurationManager.contentBaseUrl}/api/conentblock/getbyslug?slug='call-to-action'`, { headers: this._headersHelper.getHeaders(), mode: 'cors' }),
            fetch(`${this._configurationManager.contentBaseUrl}/api/conentblock/getbyslug?slug='header'`, { headers: this._headersHelper.getHeaders(), mode: 'cors' }),
            fetch(`${this._configurationManager.contentBaseUrl}/api/conentblock/getbyslug?slug='content-block'`, { headers: this._headersHelper.getHeaders(), mode: 'cors' })
        ]);
        
        const json = await Promise.all(responses.map(r => r.json()));

        return {
            callToAction: json[0],
            header: json[1],
            contentBlock: json[2]
        };
    }

    public tryToSaveContact(contact: any) {
        return this._http
            .post(`${this._configurationManager.contactBaseUrl}/api/contact/add`, contact, { headers: this._headersHelper.getAngularHeaders() })
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }    
}