import { Component } from '@angular/core';
import {history} from './history';
import {AppService} from './app.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  model = new history(null, '', '', '', '', '', false);
  histories: history[];
  ngOnInit() {
  }
 

constructor(private _appService: AppService) {}

onGetHistory() {
  console.log('get history');
this._appService.getThreat().subscribe((data) => { this.histories = data
  console.log(this.histories); });
}


}
