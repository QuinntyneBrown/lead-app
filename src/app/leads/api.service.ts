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

    public async getViewModel(): Promise<{
        callToAction: any,
        header: any,
        contentBlock:any
    }> {
        const responses = await Promise.all([
            this.makeHttpGetRequest(`${this._configurationManager.contentBaseUrl}/api/calltoactioncontentblock/getbyslug?slug=call-to-action`),
            this.makeHttpGetRequest(`${this._configurationManager.contentBaseUrl}/api/contentblock/getbyslug?slug=header`),
            this.makeHttpGetRequest(`${this._configurationManager.contentBaseUrl}/api/contentblock/getbyslug?slug=content-block`)
        ]);


        
        return {
            callToAction: responses[0].callToActionContentBlock,
            header: responses[1].contentBlock,
            contentBlock: responses[2].contentBlock
        };
    }

    public makeHttpGetRequest(url: string): Promise<any> {
        return this._http.get(url, { headers: this._headersHelper.getAngularHeaders() }).map(data => data.json()).toPromise();
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