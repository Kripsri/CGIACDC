import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegisterAttackComponent } from './register-attack/register-attack.component';
import { RegisterThreatsComponent } from './register-threats/register-threats.component';
import { AttackHistoryComponent } from './attack-history/attack-history.component';
import { RegisterHouseComponent } from './register-house/register-house.component';
import { RegisterThreatService } from './register-threats/register-threats.service';
import { RegisterHouseService } from './register-house/register-house.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterAttackComponent,
    RegisterThreatsComponent,
    AttackHistoryComponent,
    RegisterHouseComponent,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RegisterThreatService, RegisterHouseService, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
