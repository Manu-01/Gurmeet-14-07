import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BenderReactiveformComponent } from './bender-reactiveform/bender-reactiveform.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component:LoginComponent
  // },
  {
    path:'',
    component:BenderReactiveformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
