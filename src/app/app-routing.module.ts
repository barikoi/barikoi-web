import { NgModule } from '@angular/core';
import { Routes, RouterModule , CanActivate} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { UrbanEngineComponent } from './components/urban-engine/urban-engine.component';
import { BarikoiApiComponent } from './components/barikoi-api/barikoi-api.component';
import { BkoiAddressVerifyComponent } from './components/bkoi-address-verify/bkoi-address-verify.component';
import { RupantorComponent } from './components/rupantor/rupantor.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';

import { AuthService as AuthGuard } from './services/auth.service';
import { RoleGuardService as RoleGuard } from './services/role-guard.service' 


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'pricing', component: PricingComponent, canActivate: [AuthGuard]  },
  { path: 'urban-engine', component: UrbanEngineComponent },
  { path: 'api', component: BarikoiApiComponent },
  { path: 'avy', component: BkoiAddressVerifyComponent },
  { path: 'rupantor', component: RupantorComponent, canActivate: [RoleGuard]  },
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
