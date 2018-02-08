import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { dashboard } from './dashboard';

import 'rxjs/add/operator/map';

@Injectable()
export class DashboardService {

    private getserverUrl = 'https://cgigot.azurewebsites.net/sonar/api/GetDistance';
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(
        private http: Http
    ) { }



    getDistance(): Observable<any[]> {
        const geturl = `${this.getserverUrl}`;

        return this.http.get(geturl, {headers: this.headers}).map(res => res.json());
    }

   


}
