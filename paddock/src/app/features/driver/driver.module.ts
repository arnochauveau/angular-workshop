import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './components/driver/driver.component';
import { AgePipe } from './pipes/age.pipe';



@NgModule({
  declarations: [
    DriverComponent,
    AgePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DriverComponent
  ]
})
export class DriverModule { }
