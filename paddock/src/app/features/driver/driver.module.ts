import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './components/driver/driver.component';
import { AgePipe } from './pipes/age.pipe';
import { DriverOverviewContainer } from './containers/driver-overview/driver-overview.container';



@NgModule({
  declarations: [
    DriverComponent,
    AgePipe,
    DriverOverviewContainer
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DriverOverviewContainer
  ]
})
export class DriverModule { }
