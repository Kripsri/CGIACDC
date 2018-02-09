import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { RegHouse } from './RegHouse';

import 'rxjs/add/operator/map';
import { Winmsg } from './Winmsg';

@Injectable()
export class RegisterHouseService {

    private serverUrl = 'https://cgigot.azurewebsites.net/site/api/RegisterHouse';
    private getserverUrl = 'https://cgigot.azurewebsites.net/site/api/GetVideoPhrases';
 
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(
        private http: Http
    ) { }



    getThreat(model: RegHouse): Observable<any[]> {
        const geturl = `${this.serverUrl}`;

        return this.http.post(geturl, JSON.stringify(model), {headers: this.headers}).map(res => res.json());
    }

    getWinmsg(msg: Winmsg): Observable<any[]> {
        console.log(msg);
        const geturl = `${this.getserverUrl}`;
return this.http.post(geturl, JSON.stringify(msg) , {headers: this.headers}).map(res => res.json());

    }

}
