import { Component, OnInit } from '@angular/core';
import{RegisterHouseService} from './register-house.service';
import { RegHouse } from './RegHouse';


@Component({
  selector: 'app-register-house',
  templateUrl: './register-house.component.html',
  styleUrls: ['./register-house.component.css']
})
export class RegisterHouseComponent implements OnInit {

 model = new RegHouse('','','','');
  constructor(private _houseService: RegisterHouseService) { }

  ngOnInit() {
  }

  onRegisterHouse(): void {
    console.log(this._houseService.getThreat().subscribe(model => console.log(this.model)));
  }
}
