import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DevDashComponent } from './dev-dash/dev-dash.component';
import { AccountComponent } from './account/account.component';
import { AnalyticsComponent } from './analytics/analytics.component';





const routes: Routes = [
    {
        path: 'dev',
        component: DevDashComponent,
        children: [
            {
                path: 'account',
                component: AccountComponent,
                // outlet: 'side'
            },
            {
                path: 'analytics',
                component: AnalyticsComponent,
                // outlet: 'side'
            }
        ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class DevDashRoutingModule { }