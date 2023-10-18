import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingMainComponent } from './landing-main/landing-main.component';
import { PrimeNGImportsModule } from '../module-imports/prime-ng-imports/prime-ng-imports.module';
import { LandingExploreComponent } from './landing-explore/landing-explore.component';


@NgModule({
  declarations: [
    LandingMainComponent,
    LandingExploreComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    PrimeNGImportsModule
  ]
})
export class LandingModule { }
