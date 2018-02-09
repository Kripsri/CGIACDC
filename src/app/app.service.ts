import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

    private serverUrl = 'http://cgigot.azurewebsites.net/site/api/GetAttackHistory';
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(
        private http: Http
    ) { }



    getThreat(): Observable<any[]> {
        const geturl = `${this.serverUrl}`;

        return this.http.get(geturl, {headers: this.headers}).map(res => res.json());
    }

}
