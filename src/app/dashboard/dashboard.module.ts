import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';

import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { DetailsPageComponent } from './details-page/details-page.component';
@NgModule({
  declarations: [
    LandingpageComponent,
    DetailsPageComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AgGridModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
