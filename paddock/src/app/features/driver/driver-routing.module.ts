import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverDetailContainer } from './containers/driver-detail/driver-detail.container';
import { DriverOverviewContainer } from './containers/driver-overview/driver-overview.container';

const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full'},
  { path: 'overview', component: DriverOverviewContainer },
  { path: ':permanentNumber', component: DriverDetailContainer}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule { }
