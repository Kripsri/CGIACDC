import { Routes, RouterModule } from '@angular/router';
import { RegisterAttackComponent } from './register-attack/register-attack.component';
import { RegisterThreatsComponent } from './register-threats/register-threats.component';
import { AttackHistoryComponent } from './attack-history/attack-history.component';

const MAINMENU_ROUTES: Routes = [
  //full : makes sure the path is absolute path
  { path: '', redirectTo: '/registerAttack', pathMatch: 'full' },
  { path: 'registerAttack', component: RegisterAttackComponent },
  { path: 'registerThreats', component: RegisterThreatsComponent },
  { path: 'attackHistory', component: AttackHistoryComponent }



];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
