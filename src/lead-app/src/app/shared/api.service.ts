import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class ApiService {
    constructor(private _http: Http) { }

    public getContentBlockBySlug(slug:string) {
        return this._http
            .get(`${this._baseUrl}api/conentblock/getbyslug?slug=${slug}`)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public get _baseUrl() { return "http://contentblock.quinntynebrown.com/"; }

}
