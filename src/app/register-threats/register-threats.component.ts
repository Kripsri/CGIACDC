import { Component, OnInit } from '@angular/core';
import {threat} from './threat';
import{RegisterThreatService} from './register-threats.service';

@Component({
  selector: 'app-register-threats',
  templateUrl: './register-threats.component.html',
  styleUrls: ['./register-threats.component.css']
})
export class RegisterThreatsComponent implements OnInit {

  threat: any;
  imagename: string;
  model = new threat('', '', {Name: '', Value: ''});

  constructor(private _threatService: RegisterThreatService) { }



  ngOnInit() {

  }

  onRegisterThreat(): void {
   console.log('Rgister Threat');

    this._threatService.addThreat(this.model).subscribe(res => console.log(res));

}
clickIOTDeviceOption(event: EventTarget)
{
}
}
