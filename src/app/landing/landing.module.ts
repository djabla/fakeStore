import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingMainComponent } from './landing-main/landing-main.component';
import { PrimeNGImportsModule } from '../module-imports/prime-ng-imports/prime-ng-imports.module';
import { LandingExploreComponent } from './landing-explore/landing-explore.component';
import { LandingAccordionComponent } from './landing-accordion/landing-accordion.component';
import { LandingBestSellersComponent } from './landing-best-sellers/landing-best-sellers.component';
import { LandingNewArrivalsComponent } from './landing-new-arrivals/landing-new-arrivals.component';
import { LandingPromosComponent } from './landing-promos/landing-promos.component';
import { LandingFeaturedComponent } from './landing-featured/landing-featured.component';


@NgModule({
  declarations: [
    LandingMainComponent,
    LandingExploreComponent,
    LandingAccordionComponent,
    LandingBestSellersComponent,
    LandingNewArrivalsComponent,
    LandingPromosComponent,
    LandingFeaturedComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    PrimeNGImportsModule
  ]
})
export class LandingModule { }
