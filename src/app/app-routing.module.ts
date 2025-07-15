import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthThemeComponent } from './theme-wrapper/auth-theme/auth-theme.component';
import { DashboardThemeComponent } from './theme-wrapper/dashboard-theme/dashboard-theme.component';

const routes: Routes = [

  {
    path: '', component: AuthThemeComponent,
    children: [
      // { path: '', redirectTo: 'auth', pathMatch: 'full' },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
      }
    ]
  },
  {
    path: 'dashboard', component: DashboardThemeComponent,
    children: [
      { path: '', redirectTo: 'landingpage', pathMatch: 'full' },
      {
        path: 'landingpage',
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
