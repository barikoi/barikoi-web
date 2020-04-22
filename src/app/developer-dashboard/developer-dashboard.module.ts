import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClipboardModule } from 'ngx-clipboard';



import { DevDashComponent } from './dev-dash/dev-dash.component';
import { AccountComponent } from './account/account.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SidebarComponent} from './sidebar/sidebar.component'
import { ApiModalComponent} from './api-modal/api-modal.component'
import { DevDashRoutingModule } from './dev-dash.routing.module';
import { ResetPassModalComponent } from './reset-pass-modal/reset-pass-modal.component';



@NgModule({
  declarations: [DevDashComponent, AccountComponent, AnalyticsComponent, SidebarComponent, ApiModalComponent, ResetPassModalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    DevDashRoutingModule,
    FlexLayoutModule,
    ClipboardModule
  ],
  entryComponents: [ApiModalComponent, ResetPassModalComponent]
})
export class DeveloperDashboardModule { }
