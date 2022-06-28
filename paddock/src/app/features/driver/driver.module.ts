import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { DriverOverviewContainer } from './containers/driver-overview/driver-overview.container';
import { DriverComponent } from './components/driver/driver.component';
import { DriverDetailContainer } from './containers/driver-detail/driver-detail.container';


@NgModule({
  declarations: [DriverOverviewContainer, DriverComponent, DriverDetailContainer],
  imports: [
    CommonModule,
    DriverRoutingModule
  ],
  exports: [DriverOverviewContainer]
})
export class DriverModule { }
