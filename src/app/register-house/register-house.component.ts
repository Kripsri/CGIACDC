import { Component, OnInit } from '@angular/core';
import{RegisterHouseService} from './register-house.service';
import { RegHouse } from './RegHouse';
import {Winmsg} from './Winmsg';


@Component({
  selector: 'app-register-house',
  templateUrl: './register-house.component.html',
  styleUrls: ['./register-house.component.css']
})
export class RegisterHouseComponent implements OnInit {

 model = new RegHouse('','','','');

 modelMsg= new Winmsg('');
  videolinks: any[];
  results: any[];
  constructor(private _houseService: RegisterHouseService) { }
// tslint:disable-next-line:member-ordering

  ngOnInit() {
  }

  onRegisterHouse(): void {
    console.log(this._houseService.getThreat(this.model).subscribe(model => console.log(this.model)));
  }

  GetWinMsgs(): void{
    console.log('Get Win msgs');
    console.log(this._houseService.getWinmsg(this.modelMsg).subscribe(res => {console.log(res); this.Getresults(res)}));

  }
  Getresults(res: any)
  {
this.results = res.results;
  }
}
