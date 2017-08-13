import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {ConfigurationManager} from "./shared/services/configuration-manager";
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {
    constructor(
        private _configurationManager: ConfigurationManager,
        private _httpClient: HttpClient) { }

    public getViewModel(): Observable<{
        callToAction: any,
        header: any,
        contentBlock:any
    }> {        
        return Observable.forkJoin([
            this.get(`${this._configurationManager.contentBaseUrl}/api/calltoactioncontentblock/getbyslug?slug=call-to-action`),
            this.get(`${this._configurationManager.contentBaseUrl}/api/contentblock/getbyslug?slug=header`),
            this.get(`${this._configurationManager.contentBaseUrl}/api/contentblock/getbyslug?slug=content-block`)
        ]).map((responses) => {
            return {
                callToAction: responses[0].callToActionContentBlock,
                header: responses[1].contentBlock,
                contentBlock: responses[2].contentBlock
            }
        });
    }

    public get(url: string): Observable<any> { return this._httpClient.get(url); }

    public tryToSaveContact(contact: any) {        
        return this._httpClient
            .post(`${this._configurationManager.contactBaseUrl}/api/contacts/add`, { contact })            
            .catch((error:Error) => {
                console.log(`Error trying to save contact - ${error.message}`);
                return ErrorObservable.throw(error);
            });
    }        
}