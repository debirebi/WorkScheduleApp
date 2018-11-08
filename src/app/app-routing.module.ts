import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginFormComponent} from './login-form/login-form.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [

  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
