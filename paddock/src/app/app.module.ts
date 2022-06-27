import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DriverModule } from './features/driver/driver.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    DriverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
