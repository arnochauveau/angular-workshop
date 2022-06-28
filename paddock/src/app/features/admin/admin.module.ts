import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginContainer } from './containers/login/login.container';
import { ManageDriversContainer } from './containers/manage-drivers/manage-drivers.container';


@NgModule({
  declarations: [
    LoginContainer,
    ManageDriversContainer
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
