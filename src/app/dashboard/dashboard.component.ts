import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { dashboard } from './dashboard';
import { DashboardService } from './dashboard.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit {
  distance: any;
  model = new dashboard('', '');
  model1 = new dashboard('', '');
  public programs=[];


  //constructor(http:Http,private _dashboardservice: DashboardService) { 

   /* Observable.interval(5000)
    .switchMap(() => http.get('https://cgigot.azurewebsites.net/sonar/api/GetDistance/')).map((data) => data.json())
        .subscribe((data) => {
          this.model = data;
          console.log(this.model);});

          Observable.interval(5000)
          .switchMap(() => http.get('https://cgigot.azurewebsites.net/rfid/api/GetCard')).map((cardData) => cardData.json())
              .subscribe((cardData) => {
                this.model1 = cardData;
                console.log(this.model1);
          
  }); }*/

  ngOnInit() {

    console.log(this._dashboardservice.getDistance().subscribe(program => this.programs = program));
    }






}
