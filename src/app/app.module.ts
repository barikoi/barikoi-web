import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng5SliderModule } from 'ng5-slider';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeComponent } from './components/home/home.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { HomeNavComponent } from './components/home-nav/home-nav.component';
import { HeaderComponent } from './components/home/header/header.component';
import { ApplinkComponent } from './components/home/applink/applink.component';
import { BkoiBusinessComponent } from './components/home/bkoi-business/bkoi-business.component';
import { BkoiDeveloperComponent } from './components/home/bkoi-developer/bkoi-developer.component';
import { BkoiBuiltWithComponent } from './components/home/bkoi-built-with/bkoi-built-with.component';
import { PricingCalculatorComponent } from './components/pricing/pricing-calculator/pricing-calculator.component';
import { PricingFreeComponent } from './components/pricing/pricing-free/pricing-free.component';
import { PricingEnterpriseComponent } from './components/pricing/pricing-enterprise/pricing-enterprise.component';
import { PricingFooterComponent } from './components/pricing/pricing-footer/pricing-footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PricingSupportComponent } from './components/pricing/pricing-support/pricing-support.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PricingComponent,
    HomeNavComponent,
    HeaderComponent,
    ApplinkComponent,
    BkoiBusinessComponent,
    BkoiDeveloperComponent,
    BkoiBuiltWithComponent,
    PricingCalculatorComponent,
    PricingFreeComponent,
    PricingEnterpriseComponent,
    PricingFooterComponent,
    NavbarComponent,
    PricingSupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    Ng5SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
