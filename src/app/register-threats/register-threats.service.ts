import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { threat } from './threat';

import 'rxjs/add/operator/map';

@Injectable()
export class RegisterThreatService {

    private serverUrl = 'http://cgigot.azurewebsites.net/site/api/RegisterThread';
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(
        private http: Http
    ) { }

    addThreat(threats: threat): Observable<any[]> {
        console.log(threats);
        const url = `${this.serverUrl}`;

return this.http.post(url, JSON.stringify(threats), {headers: this.headers})
                               .map(res => res.json());


    }



}
