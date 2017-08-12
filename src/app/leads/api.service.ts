import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ConfigurationManager} from "../configuration";

@Injectable()
export class ApiService {
    constructor(
        private _configurationManager: ConfigurationManager,
        private _httpClient: HttpClient) { }

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
        return this._httpClient.get(url).toPromise();
    }

    public tryToSaveContact(contactRequest: any) {
        return this._httpClient
            .post(`${this._configurationManager.contactBaseUrl}/api/contacts/add`, { contactRequest })            
            .catch(err => {
                return Observable.of(false);
            });
    }        
}