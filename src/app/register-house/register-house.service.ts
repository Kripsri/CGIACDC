import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { RegHouse } from './RegHouse';

import 'rxjs/add/operator/map';

@Injectable()
export class RegisterHouseService {

    private serverUrl = 'https://cgigot.azurewebsites.net/site/api/RegisterHouse';
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(
        private http: Http
    ) { }



    getThreat(): Observable<any[]> {
        const geturl = `${this.serverUrl}`;

        return this.http.post(geturl, {headers: this.headers}).map(res => res.json());
    }

}
