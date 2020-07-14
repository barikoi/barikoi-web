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
import { SignupComponent } from './components/signup/signup.component';


import { DevDashComponent } from './developer-dashboard/dev-dash/dev-dash.component'
import { AccountComponent } from './developer-dashboard/account/account.component'
import { AnalyticsComponent } from './developer-dashboard/analytics/analytics.component'
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';



import { AuthService as AuthGuard } from './services/auth.service';
import { RoleGuardService as RoleGuard } from './services/role-guard.service' 


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'pricing', component: PricingComponent},
  { path: 'privacy', component: PrivacyPolicyComponent},
  { path: 'urban-engine', component: UrbanEngineComponent },
  { path: 'api', component: BarikoiApiComponent },
  { path: 'avy', component: BkoiAddressVerifyComponent },
  { path: 'rupantor', component: RupantorComponent},
  { path: 'search/:uCode', component: SearchComponent },
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dev',
    component: DevDashComponent,
    children: [
        {
            path: 'account',
            component: AccountComponent,
            canActivate: [RoleGuard]
        },
        {
            path: 'analytics',
            component: AnalyticsComponent,
            canActivate: [RoleGuard]
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
