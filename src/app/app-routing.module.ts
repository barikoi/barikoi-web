import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { UrbanEngineComponent } from './components/urban-engine/urban-engine.component';
import { BarikoiApiComponent } from './components/barikoi-api/barikoi-api.component';
import { RupantorComponent } from './components/rupantor/rupantor.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'urban-engine', component: UrbanEngineComponent },
  { path: 'api', component: BarikoiApiComponent },
  { path: 'rupantor', component: RupantorComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
