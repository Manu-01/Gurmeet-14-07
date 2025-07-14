import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DetailsPageComponent } from './details-page/details-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent,
  },
  {
    path: ':id',
    component: DetailsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
