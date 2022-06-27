import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './components/driver/driver.component';



@NgModule({
  declarations: [
    DriverComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DriverComponent
  ]
})
export class DriverModule { }
