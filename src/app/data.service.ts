import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class DataService {
    constructor(private _http:Http) {
    }

    get(url:string):Observable<any> {
        let headers = new Headers();
        let options = new RequestOptions({headers: headers});
        return this._http.get(url, options).map(this.extractData).catch(this.handleError);
    }

    private extractData(res:Response) {
        return res.json() || [];
    }

    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
