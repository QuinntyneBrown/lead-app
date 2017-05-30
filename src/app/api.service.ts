import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class ApiService {
    constructor(private _http: Http) { }

    public get() {
        return this._http
            .get(`/api/api/get`)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

}
