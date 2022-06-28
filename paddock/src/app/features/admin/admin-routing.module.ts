import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainer } from './containers/login/login.container';
import { ManageDriversContainer } from './containers/manage-drivers/manage-drivers.container';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'manage-drivers', pathMatch: 'full' },
  { path: 'manage-drivers', component: ManageDriversContainer, canActivate: [AdminGuard] },
  { path: 'login', component: LoginContainer}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
